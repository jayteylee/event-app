import React from "react";
import { useNavigate } from 'react-router-dom';


function HeaderSection() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/login')

    }
    return (
        <div>
            <div className='flex flex-col'>
                <div className="flex flex-row w-full h-32 bg-slate-600 justify-center">
                    <button type="button" onClick={handleClick} className="w-10 h-10 bg-black"></button>
                    <h1 className='text-2xl text-center justify-center'>Maori Event Opportunities</h1>
                </div>
            </div>
        </div>
    )


} export default HeaderSection