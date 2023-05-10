import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";

function ViewEvent() {
    const { id } = useParams();
    const [event, setEvent] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadEvent();
    }, [])

    const loadEvent = async () => {
        const result = await axios.get(`http://localhost:8081/events/${id}`);
        console.log(result.data)
        setEvent(result.data);
    }

    const handleClick = (e) => {
        e.preventDefault()
    }

    const handleCancel = (e) => {
        e.preventDefault()
        navigate("/events");
    }
    return (
        <>
            <HeaderSection></HeaderSection>
            <Navigation></Navigation>
            <div class="flex flex-col items-center justify-center w-3/4 px-8 py-32 mx-auto">
                <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-50">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="flex flex-row">
                            <p className="mx-2">{event.startTime}</p>
                            <p className="mx-2">-</p>
                            <p className="mx-2">{event.endTime}</p>
                        </div>
                        <h1 class="text-xl font-bold md:text-2xl">
                            {event.title}
                        </h1>
                        <div className="flex flex-row">
                            <h3 className="mr-3 w-1/5">Type:</h3>
                            <p className="px-3 rounded-md shadow-md">{event.type}</p>
                        </div>
                        <div className="flex flex-row">
                            <h3 className="mr-3 w-1/5">Location:</h3>
                            <div className="px-3 rounded-md shadow-md">
                            <p>{event.location}</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <h3 className="mr-3 w-1/5">Description:</h3>
                            <p className="px-3 rounded-md shadow-md">{event.description}</p>
                        </div>
                        <div className="flex flex-col">
                        <div className="flex flex-row justify-center h-10 my-2">
                                <button value="create-liason" type="button" onClick={handleClick} className="hover:bg-yellow-400 hover:text-white border-yellow-400 text-yellow-400 transition-all rounded-md justify-center w-3/5 border shadow-md font-poppins text-black font-semibold mx-2">RSVP</button>
                            </div>
                            <div className="flex flex-row justify-center h-10 my-2">
                                <button type="button" onClick={handleCancel} className="hover:bg-red-600 hover:text-white transition-all rounded-md justify-center w-3/5 border shadow-md font-poppins text-red-600 border-red-600 font-semibold mx-2">Go Back</button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
} export default ViewEvent;