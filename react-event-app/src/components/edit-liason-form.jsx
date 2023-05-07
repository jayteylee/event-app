import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditLiasonForm() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8081/liasons/${id}`, {
            title: title,
            startTime: startTime,
            location: location,
        });
        navigate('/liasons');
    };

    const onCancelClick = (e) => {
        e.preventDefault()
        navigate('/liasons');
    }

    useEffect(() => {
        loadLiason();
    }, []);

    const loadLiason = async () => {
        const result = await axios.get(`http://localhost:8081/liasons/${id}`)
        setTitle(result.data.title);
        setStartTime(result.data.startTime);
        setLocation(result.data.location);
    }
    return (
        <div className="w-full h-full flex justify-center mt-28">
            <div className="border rounded-lg shadow-lg flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-center mt-8 mx-11">Update Liason</h2>
                <div className="">
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-center px-10 py-5">
                    <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)}class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Time</label>
                        </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                            </div>
                        <div className="flex flex-row justify-center">
                            <button type="submit" className="transition-all mx-5 px-4 rounded-md border shadow-md border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500">Update</button>
                            <button onClick={onCancelClick} className="transition-all backdrop:mx-5 px-4 rounded-md border shadow-md border-red-500 hover:bg-red-500 hover:text-white text-red-500">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} export default EditLiasonForm;