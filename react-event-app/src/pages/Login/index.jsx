import axios from "axios";
import HeaderSection from "../../components/header"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isStaff, setIsStaff] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const httpRequest = isStaff ? "http://localhost:8081/login" : "http://localhost:8081/student/login";
        const response = await axios.post(httpRequest, {
            email: email,
            password: password
        })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setAuthenticated(true);
                    sessionStorage.setItem('user', JSON.stringify({ email }));
                    sessionStorage.setItem('isLoggedIn', true);
                    if (email.includes('@staff')) {
                        sessionStorage.setItem('staff', true);
                    }else{
                        sessionStorage.removeItem('staff');
                    }
                    navigate('/events');
                }
            }).catch(error => {
                if (error.response.status === 401) {
                    // handle unauthorized access error
                    alert('Invalid username or password. Please try again.')
                } else {
                    // handle other errors
                    console.error(error)
                }
            })
    };

    const onStaffClick = (e) => {
        e.preventDefault();
        setIsStaff(true);
    }

    const onStudentClick = (e) => {
        e.preventDefault();
        setIsStaff(false);
    }
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection>
                <div className="flex flex-col items-center justify-center w-3/4 px-8 py-32 mx-auto">
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-50 z-10">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form onSubmit={(e) => handleLogin(e)} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-3000 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`${isStaff ? "user@staff.otago.ac.nz" : "user@student.otago.ac.nz"}`} required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full bg-yellow-300 hover:bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-center">
                        <button type="button" autofocus onClick={(e) => onStaffClick(e)} className={`items-center flex flex-col w-48 h-9 rounded-bl-md shadow-md justify-center hover:cursor-pointer ${isStaff ? 'bg-gray-200 shadow-xl font-semibold' : 'bg-gray-50'}`}>
                            <p className="">Staff</p>
                        </button>
                        <button onClick={(e) => onStudentClick(e)} className={`items-center flex flex-col w-48 h-9 rounded-br-md justify-center shadow-md hover:cursor-pointer ${!isStaff ? 'bg-gray-200 shadow-xl font-semibold' : 'bg-gray-50'}`}>
                            <p className="">Student</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

} export default Login