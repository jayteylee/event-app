import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function EventForm(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [subject, setSubject] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [capacity, setCapacity] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/events", {
            title: title,
            type: type,
            startTime: startTime,
            endTime: endTime,
            subject: subject,
            category: category,
            location: location,
            capacity: capacity,
            description: description
        });
        navigate('/events');
    };

    const onCancelClick = (e) => {
        e.preventDefault()
        navigate('/events');
    }
    return (
        <div className="w-full h-full flex justify-center mt-28">
                <div className="border rounded-lg shadow-lg flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-center mt-8">Create Event</h2>
                    <div className="">
                        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-center px-10 py-5">
                            <label className="my-2 border rounded-md px-2">
                                Title:
                                <input className="mx-2" type="text" placeHolder="Enter event title..." value={title} onChange={(e) => setTitle(e.target.value)} />
                            </label>
                            <label className="my-2 border rounded-md px-2">
                                Type:
                                <input className="mx-2" type="text" placeHolder="Enter event type..." value={type} onChange={(e) => setType(e.target.value)} />
                            </label>
                            <label className="my-2 border rounded-md px-2">
                                Start Time:
                                <input className="mx-2" type="datetime-local" placeHolder="Enter event start time..." value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                            </label>
                            <label className="my-2 border rounded-md px-2">
                                End Time:
                                <input className="mx-2" type="datetime-local" placeHolder="Enter event end time..." value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                            </label>
                            <label className="my-2 border rounded-md px-2">
                                Subject:
                                <input className="mx-2" type="text" placeHolder="Enter event subject..." value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </label>
                            <label className="my-2 border rounded-md px-2">
                                Category:
                                <input className="mx-2" type="text" placeHolder="Enter event category..." value={category} onChange={(e) => setCategory(e.target.value)} />
                            </label>
                            <label className="my-2 border rounded-md px-2">
                                Location:
                                <input className="mx-2" type="text" placeHolder="Enter event location..." value={location} onChange={(e) => setLocation(e.target.value)} />
                            </label>
                            <label className="my-2 border rounded-md px-2">
                                Capacity:
                                <input className="mx-2" type="number" placeHolder="Enter event capacity..." value={capacity} onChange={(e) => setCapacity(e.target.value)} />
                            </label>
                            <label className="flex justify-start my-2 border rounded-md px-2">
                                Description:
                                <textarea className="mx-2" value={description} placeHolder="..." onChange={(e) => setDescription(e.target.value)} />
                            </label>
                            <div className="flex flex-row justify-center">
                                <button type="submit" className="mx-5 px-4 rounded-md border shadow-md hover:bg-yellow-100">Create Event</button>
                                <button onClick={onCancelClick} className="mx-5 px-4 rounded-md border shadow-md bg-red-500 hover:bg-red-900">CANCEL</button>
                            </div>
                        </form>
                    </div>
            </div>

        </div>
    )
} export default EventForm;