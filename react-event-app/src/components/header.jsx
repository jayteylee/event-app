import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import uniLogo from "../images/uni-logo.png"


function HeaderSection() {
    const [menuOpen, setMenuOpen] = useState(true);
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault()
        navigate('/')
    }
    const handleButtonClick = (event) => {
        setMenuOpen(!menuOpen);
      }
    return (
        <div>
            <div className='flex flex-col'>
            <header className="">
                    <div className='w-full h-2 bg-yellow-400'></div>
                    <div className='relative flex flex-row justify-between w-full h-20 bg-blue-900'>
                    <div className='basis-1/4 h-full'>
                        <img src={uniLogo} className='w-full h-full object-contain' onClick={handleClick}></img>
                    </div>
                    <div className='flex flex-col justify-center'>
                    <h1 className='text-2xl text-center justify-center text-white mx-10 font-poppins'>Maori Event Opportunities</h1>
                    </div>
                    <div className='flex flex-col justify-center basis-1/4'>
                        <button onClick={handleButtonClick} className="w-1/2 text-sm font-medium transition-all hover:bg-slate-200 px-4 py-1 border-1 bg-white rounded-lg mx-4">{menuOpen ? "Close Menu" : "Expand Menu"}</button>
                    </div>
                    </div>
                </header>
            </div> 
        </div>
    )


} export default HeaderSection