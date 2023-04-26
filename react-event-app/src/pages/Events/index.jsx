import { useEffect, useState } from "react";
import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Events() {
    const [events, setEvents] = useState([]);
    const {id}=useParams()

    useEffect(() => {
        loadEvents();
    }, [])

    const loadEvents = async () => {
        const result = await axios.get("http://localhost:8081/events");
        console.log(result.data)
        setEvents(result.data);
    }

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/${e.target.value}`)
    }

    const deleteEvent = async(id) => {
        console.log(id)
        await axios.delete(`http://localhost:8081/events/${id}`)
        loadEvents();
    }

    return (
        <div className='w-screen h-screen'>
                <HeaderSection></HeaderSection>
                <Navigation></Navigation>
                    <table className="table-auto relative shadow-lg rounded-lg overflow-hidden">
                        <tr>
                            <th className="bg-blue-100 border border-black text-left px-8 py-4">Event ID</th>
                            <th className="bg-blue-100 border border-black text-left px-8 py-4">Title</th>
                            <th className="bg-blue-100 border border-black text-left px-8 py-4">Type</th>
                            <th className="bg-blue-100 border border-black text-left px-8 py-4">Start Time</th>
                            <th className="bg-blue-100 border border-black text-left px-8 py-4">End Time</th>
                            <th className="bg-blue-100 border border-black text-left px-8 py-4">Subject</th>
                            <th className="bg-blue-100 border border-black text-left px-8 py-4">Category</th>
                            <th className="bg-blue-100 border border-black text-left px-8 py-4">Location</th>
                            <th className="bg-blue-100 border border-black text-left px-8 py-4">Capacity</th>
                            <th className="bg-blue-100 border border-black text-left px-8 py-4">Description</th>
                            <th className="bg-blue-100 border border-black text-center px-8 py-4">Action</th>
                        </tr>
                        <tbody>
                            {
                                events.map((event) => (
                                    <tr>
                                        <td className="border px-8 py-4">{event.eventID}</td>
                                        <td className="border px-8 py-4">{event.title}</td>
                                        <td className="border px-8 py-4">{event.type}</td>
                                        <td className="border px-8 py-4">{event.startTime}</td>
                                        <td className="border px-8 py-4">{event.endTime}</td>
                                        <td className="border px-8 py-4">{event.subject}</td>
                                        <td className="border px-8 py-4">{event.category}</td>
                                        <td className="border px-8 py-4">{event.location}</td>
                                        <td className="border px-8 py-4">{event.capacity}</td>
                                        <td className="border px-8 py-4">{event.description}</td>
                                        <div className="flex flex-row justify-center items-center border px-8 py-4">
                                            <button className="px-6 py-1 mx-5 rounded-md shadow-md hover:bg-yellow-100">EDIT</button>
                                            <button onClick={() => deleteEvent(event.eventID)} className="px-6 py-1 mx-5 rounded-md shadow-md bg-red-500 hover:bg-red-900">DELETE</button>
                                        </div>
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                <div className="flex flex-row justify-center h-10 my-7">
                    <button value="create-event" type="button" onClick={handleClick} className="justify-center w-2/12 border shadow-md font-poppins text-blue-900 mx-2">Create Event</button>
                </div>
            </div>
    )
} export default Events;