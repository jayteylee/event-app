import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import uniLogo from "../images/uni-logo.png"


function HeaderSection() {
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    const handleClick = (e) => {
        e.preventDefault()
        isLoggedIn ? navigate('/events') : navigate('/')
    }

    const handleLogout = (e) => {
        e.preventDefault()
        sessionStorage.clear();
        navigate('/login');
    }
    return (
        <div>
            <div className='flex flex-col'>
                <header className="">
                    <div className='w-full h-2 bg-yellow-400'></div>
                    <div className='relative flex flex-row w-full h-20 bg-blue-900'>
                        <div className='h-full'>
                            <img src={uniLogo} className='hover:cursor-pointer w-full h-full object-contain' onClick={handleClick}></img>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-2xl text-center justify-center text-white mx-10 font-poppins'>University of Otago</h1>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-2xl text-center justify-center text-white mx-10 font-poppins'></h1>
                        </div>
                        <div className="flex flex-col justify-center ml-auto mr-8">
                            {isLoggedIn && (
                                <button value="login" type="button" onClick={handleLogout} className="hover:shadow-lg hover:text-lg transition-all font-poppins text-white mx-2">
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )


} export default HeaderSection