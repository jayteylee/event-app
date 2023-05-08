import { useEffect, useState } from "react";
import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Events() {
    const [events, setEvents] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadEvents();
    }, []);

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

    const deleteEvent = async (id) => {
        await axios.delete(`http://localhost:8081/events/${id}`)
        loadEvents();
    }

    const editEvent = async (id) => {
        navigate(`/update-event/${id}`)
    }

    const viewEvent = async (id) => {
        navigate(`/view-event/${id}`)
    }

    return (
        <div className='w-screen h-screen'>
            <HeaderSection></HeaderSection>
            <Navigation></Navigation>
            <div className="flex flex-row w-full h-full">
                <div className="flex flex-col w-1/5 h-full bg-slate-50 shadow-lg">
                        <h2 className="text-3xl font-bold text-center mt-8">Welcome back!</h2>
                    <div className="flex flex-row justify-center h-10 my-7">
                        <button value="create-event" type="button" onClick={handleClick} className="hover:bg-slate-100 transition-all rounded-md justify-center w-3/5 border shadow-md font-poppins text-black font-semibold mx-2">Create Event</button>
                    </div>
                </div>
                <div className="flex flex-col w-4/5 h-full">
                    <h2 className="text-3xl font-bold text-center mt-8">Events</h2>
                    <div className="m-9 relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full marker:text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" class="text-center border px-9 py-3">
                                        Start Time
                                    </th>
                                    <th scope="col" class="text-center border px-12 py-3">
                                        End Time
                                    </th>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Location
                                    </th>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    events.map((event) => (
                                        <tr class="bg-white border-b">
                                            <td class="text-center border  px-6 py-4">{event.title}</td>
                                            <td class="text-center border px-6 py-4">{event.startTime}</td>
                                            <td class="text-center border px-6 py-4">{event.endTime}</td>
                                            <td class="text-center border px-6 py-4">{event.location}</td>
                                            <td class="text-center border px-6 py-4">
                                                <a onClick={() => viewEvent(event.eventID)} className="transition-all mx-2 font-medium text-yellow-400 hover:underline hover:cursor-pointer">View</a>
                                                <a onClick={() => editEvent(event.eventID)} className="transition-all mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">Edit</a>
                                                <a onClick={() => deleteEvent(event.eventID)} className="transition-all mx-2 font-medium text-red-600 dark:text-red-600 hover:underline hover:cursor-pointer">Delete</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
} export default Events;