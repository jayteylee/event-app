import { useEffect, useState } from "react";
import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        loadEvents();
    }, [])

    const loadEvents = async () => {
        const result = await axios.get("http://localhost:8080/events");
        console.log(result.data)
        setEvents(result.data);
    }

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/${e.target.value}`)
    }
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection>
                <div className='h-full w-full flex flex-col'>
                    <Navigation></Navigation>
                    <button value="create-event" type="button" onClick={handleClick} className="font-poppins text-blue-900 mx-2">Create Event</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Event ID</th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Subject</th>
                                <th>Category</th>
                                <th>Location</th>
                                <th>Capacity</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events.map((event, index) => (
                                    <tr>
                                    <th scrope="row" key = {index}>{index+1}</th>
                                    <td>{event.eventID}</td>
                                    <td>{event.title}</td>
                                    <td>{event.type}</td>
                                    <td>{event.startTime}</td>
                                    <td>{event.endTime}</td>
                                    <td>{event.subject}</td>
                                    <td>{event.category}</td>
                                    <td>{event.location}</td>
                                    <td>{event.capacity}</td>
                                    <td>{event.description}</td>
                                </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
} export default Events;