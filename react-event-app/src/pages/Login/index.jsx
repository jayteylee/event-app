import axios from "axios";
import HeaderSection from "../../components/header"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(await axios.get(`http://localhost:8081/login/${email}/${password}`)){
            navigate('/events');
        }else{
            navigate('/login');
        }
    };
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection>
                    <div class="flex flex-col items-center justify-center w-3/4 px-8 py-32 mx-auto">
                        <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-50">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                                    Sign in to your account
                                </h1>
                                <form onSubmit={(e) => handleSubmit(e)} class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  name="email" id="email" class="bg-gray-50 border border-gray-3000 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label for="remember" class="">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    <button type="submit" class="w-full bg-yellow-300 hover:bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )

} export default Login