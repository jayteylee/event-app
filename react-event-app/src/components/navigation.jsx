import React from "react";
import { useNavigate } from 'react-router-dom';

function Navigation(){
    const navigate = useNavigate();

    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // Get user information from local storage
    const user = localStorage.getItem('user');

    // Get staff information from local storage
    const staff = localStorage.getItem('staff');

    console.log(staff);


    // Handle click event on navigation buttons
    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/${e.target.value}`)
    }

    return(
        <div className='flex flex-row relative w-full h-12 bg-slate-200'>
        <button value="events" type="button" onClick={handleClick} className="transition-all hover:bg-slate-300 font-poppins text-blue-900 px-2">Events</button>
        <button value="scholarships" type="button" onClick={handleClick} className="transition-all hover:bg-slate-300 font-poppins text-blue-900 px-2">Scholarships</button>
        <button value="research" type="button" onClick={handleClick} className="transition-all hover:bg-slate-300 font-poppins text-blue-900 px-2">Research</button>
        <button value="liasons" type="button" onClick={handleClick} className="transition-all hover:bg-slate-300 font-poppins text-blue-900 px-2">Liasons</button>

        {staff && (
             <button value="liasons" type="button" onClick={handleClick} className="font-poppins text-blue-900 mx-2">Import</button>
        )}

    </div>
    )

}export default Navigation