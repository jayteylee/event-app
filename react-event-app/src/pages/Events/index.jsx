import { useEffect, useState } from "react";
import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";

function Events() {
    const [events, setEvents] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [empty, setEmpty] = useState(true);
    const isStaff = sessionStorage.getItem('staff');
    const studentId = sessionStorage.getItem('studentId');

    useEffect(() => {
        loadPage();
    }, []);

    function loadPage() {
        const eventsRequest = axios.get("http://localhost:8081/events");
        const bookingsRequest = axios.get(`http://localhost:8081/bookings/student/${studentId}`);
        Promise.all([eventsRequest, bookingsRequest])
            .then((responses) => {
                const eventsData = responses[0].data;
                const bookingsData = responses[1].data;
                setEvents(eventsData);
                setBookings(bookingsData);

                if(Array.isArray(bookingsData) && bookingsData.length === 0){
                    setEmpty(true);
                }else{
                    setEmpty(false);
                }
                console.log(eventsData);
                console.log(bookingsData);

            })
            .catch((error) => {
                console.log(error);
            })
    }

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/${e.target.value}`)
    }

    const deleteEvent = async (id) => {
        await axios.delete(`http://localhost:8081/events/${id}`);
        loadPage();
    }

    const deleteBooking = async (id) => {
        await axios.delete(`http://localhost:8081/bookings/${id}`);
        loadPage();

    }

    const editEvent = async (id) => {
        navigate(`/update-event/${id}`);
    }

    const viewEvent = async (id) => {
        navigate(`/view-event/${id}`);
    }

    console.log('isStaff', isStaff);
    return (
        <div className='w-screen h-screen  overflow-x-hidden'>
            <HeaderSection></HeaderSection>
            <Navigation></Navigation>
            <div className="flex flex-row w-full h-full">
                <div className="flex flex-col w-1/5 h-full bg-slate-50 shadow-lg">
                    <h2 className="text-3xl font-bold text-center mt-8">Kia Ora!</h2>
                    <hr className="border-b border-gray-300 w-11/12 mx-auto my-4" />
                    {!isStaff && 
                    <h2 className="font-semibold text-center mt-2">Here are your bookings:</h2>
                    }
                    {empty && !isStaff &&
                        <h3 className="text-center mt-8 italic">You have no bookings...</h3>
                    }
                    {
                        bookings.map(booking => (
                            <>
                                <li class="flex py-6">
                                    <div class="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a href="#">{booking.eventTitle}</a>
                                                </h3>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">{booking.eventStartTime}</p>
                                        </div>
                                        <div class="flex flex-1 items-end justify-between text-sm">
                                            <p class="text-gray-500">{booking.eventLocation}</p>

                                            <div class="flex mr-4">
                                                <button onClick={() => deleteBooking(booking.bookingId)} type="button" class="font-medium text-red-500 hover:text-red-600">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
                                <hr className="border-b border-gray-300 w-11/12 mx-auto" />
                            </>
                        ))
                    }
                    <div className="flex flex-row justify-center h-10 my-7">
                        {isStaff && <button value="create-event" type="button" onClick={handleClick} className="hover:bg-slate-100 transition-all rounded-md justify-center w-3/5 border shadow-md font-poppins text-black font-semibold mx-2">Create Event</button>}
                    </div>
                </div>
                <div className="flex flex-col w-4/5 h-full">
                    <h2 className="text-3xl font-bold text-center mt-8 w-full">Events || Pureitanga</h2>
                    <hr className="border-b border-gray-300 w-11/12 mx-auto my-4" />
                    <div className="grid gap-2 grid-cols-3 w-full">
                        {
                            events.map((event, index) => (
                                <div className="w-full mx-6">
                                <Card className="mt-6 w-[350px] h-64 mx-2 rounded-lg shadow-xl bg-gray-50">
                                <CardBody className="h-4/5">
                                  <Typography variant="h5" color="blue-gray" className=" h-14 w-full text-overflow: ellipsis;">
                                    {event.title}
                                  </Typography>
                                  <Typography variant="h1" color="blue-gray" className="w-full my-2">
                                    {event.location}
                                  </Typography>
                                  <Typography className="w-full my-2">
                                    Capacity: {event.capacity}
                                  </Typography>
                                  <Typography className="w-full">
                                    {event.description}
                                  </Typography>
                                </CardBody>
                                <CardFooter className="pt-0 flex-row flex">
                                  <Button onClick={() => viewEvent(event.eventID)} className="text-white bg-blue-500 mr-2">View</Button>
                                  {isStaff &&
                                  <Button onClick={() => editEvent(event.eventID)} className="text-white bg-yellow-500 mx-2">Edit</Button>
                                  }
                                  {isStaff &&
                                  <Button onClick={() => deleteEvent(event.eventID)} className="text-white bg-red-500 mx-2">Delete</Button>
                                  }
                                </CardFooter>
                              </Card>
                              </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
} export default Events;