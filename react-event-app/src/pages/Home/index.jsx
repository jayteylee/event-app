import { useNavigate } from 'react-router-dom';
import React from "react";

function Home() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/login')
    }

    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <header className="relative flex flex-row w-full h-32 bg-slate-600 justify-center">
                    <button type="button" onClick={handleClick} className="w-10 h-10 bg-white mx-10"></button>
                    <h1 className='text-2xl text-center justify-center text-white mx-10 '>Maori Event Opportunities</h1>
                </header>

                <div className='h-full w-full flex flex-row'>
                    <div className='relative basis-1/5 h-full bg-cyan-500'></div>
                </div>

            </div>
        </div>
    );
} export default Home;
