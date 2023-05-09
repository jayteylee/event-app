import React, { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Navigation(){
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    const user = localStorage.getItem('user');

    const staff = localStorage.getItem('staff');
    console.log(staff);

    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/${e.target.value}`)
    }

    return(
        <div className='flex flex-row relative w-full h-12 bg-slate-200'>
        <button value="events" type="button" onClick={handleClick} className="font-poppins text-blue-900 mx-2">Events</button>
        <button value="scholarships" type="button" onClick={handleClick} className="font-poppins text-blue-900 mx-2">Scholarships</button>
        <button value="research" type="button" onClick={handleClick} className="font-poppins text-blue-900 mx-2">Research</button>
        <button value="liasons" type="button" onClick={handleClick} className="font-poppins text-blue-900 mx-2">Liasons</button>

        {staff && (
             <button value="liasons" type="button" onClick={handleClick} className="font-poppins text-blue-900 mx-2">Import</button>
        )}

    </div>
    )

}export default Navigation