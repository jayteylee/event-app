import React from "react";
import { useNavigate } from 'react-router-dom';

function Menu(){
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/${e.target.value}`)
    }
    return(
        <div className='flex flex-col relative basis-1/5 h-full bg-stone-400'>
        <button value="login" type="button" onClick={handleClick} className="rounded-md shadow-md font-poppins my-5 w-3/5 h-10 bg-white mx-10">
            Login
        </button>
        <button value="upcoming" type="button" onClick={handleClick} className="rounded-md shadow-md font-poppins my-5 w-3/5 h-10 bg-white mx-10">Upcoming</button>
    </div>
    )

}export default Menu