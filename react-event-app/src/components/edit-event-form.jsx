import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function EditEventForm(props) {
    const navigate = useNavigate();

    const {id} = useParams();

     // State variables for form fields
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [subject, setSubject] = useState('');
    const [location, setLocation] = useState('');
    const [capacity, setCapacity] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            alert('Title is required.');
            return;
        }

        if (!startTime) {
            alert('Start Time is required.');
            return;
        }

        if (!capacity) {
            alert('Capacity is required.');
            return;
        }

        if (capacity <= 0) {
            alert('Capacity must be greater than 0.');
            return;
        }

        if (!location) {
            alert('Location is required.');
            return;
        }
        // Send PUT request to update event
        await axios.put(`http://localhost:8081/events/${id}`, {
            title: title,
            type: type,
            startTime: startTime,
            endTime: endTime,
            subject: subject,
            location: location,
            capacity: capacity,
            description: description
        });
        // Navigate to events page after successful update
        navigate('/events');
    };

    useEffect(() => {
        // Load the event data when the component mounts
        loadEvent();
    }, []);

    const loadEvent = async () => {
        // Fetch event data from the server
        const result = await axios.get(`http://localhost:8081/events/${id}`)
        // Set the form field values with the fetched data
        setTitle(result.data.title);
        setType(result.data.type);
        setStartTime(result.data.startTime);
        setEndTime(result.data.endTime);
        setSubject(result.data.subject);
        setLocation(result.data.location);
        setCapacity(result.data.capacity);
        setDescription(result.data.description);
    }

    const onCancelClick = (e) => {
        e.preventDefault()
        // Navigate to events page when cancel button is clicked
        navigate('/events');
    }
    return (
        <div className="w-full h-full flex justify-center mt-28">
        <div className="border rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center mt-8">Update Event</h2>
            <div className="">
                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-center px-10 py-5">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)}class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Time</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Time</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                        <input type="text" value={type} onChange={(e) => setType(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input value={capacity} onChange={(e) => setCapacity(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Capacity</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                        <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)}  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>
                    <div className="flex flex-row justify-center">
                        <button type="submit" className="transition-all mx-5 px-4 rounded-md border shadow-md border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500">Update</button>
                        <button onClick={onCancelClick} className="transition-all mx-5 px-4 rounded-md border shadow-md border-red-500 hover:bg-red-500 hover:text-white text-red-500">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    )
} export default EditEventForm;