import React from "react";
import { useNavigate } from 'react-router-dom';
import uniLogo from "../images/uni-logo.png"


function HeaderSection() {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <div>
            <div className='flex flex-col'>
            <header className="">
                    <div className='w-full h-2 bg-yellow-400'></div>
                    <div className='relative flex flex-row w-full h-20 bg-blue-900'>
                    <div className='h-full'>
                        <img src={uniLogo} className='w-full h-full object-contain' onClick={handleClick}></img>
                    </div>
                    <div className='flex flex-col justify-center'>
                    <h1 className='text-2xl text-center justify-center text-white mx-10 font-poppins'>University of Otago</h1>
                    </div>
                    </div>
                </header>
            </div> 
        </div>
    )


} export default HeaderSection