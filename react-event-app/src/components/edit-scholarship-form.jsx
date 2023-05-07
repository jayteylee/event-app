import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditScholarshipForm(){
        const navigate = useNavigate();
        const {id} = useParams();
        const [name, setName] = useState('');
        const [type, setType] = useState('');
        const [subject, setSubject] = useState('');
        const [numAvailable, setNumAvailable] = useState('');
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            await axios.put(`http://localhost:8081/scholarships/${id}`, {
                name: name,
                type: type,
                subject: subject,
                numAvailable: numAvailable
            });
            navigate('/scholarships');
        };
    
        const onCancelClick = (e) => {
            e.preventDefault()
            navigate('/scholarships');
        }

        useEffect(() => {
            loadScholarship();
        }, []);

        const loadScholarship = async () => {
            const result = await axios.get(`http://localhost:8081/scholarships/${id}`)
            setName(result.data.name);
            setType(result.data.type);
            setSubject(result.data.subject);
            setNumAvailable(result.data.numAvailable);
        }

    return(
        <div className="w-full h-full flex justify-center mt-28">
            <div className="border rounded-lg shadow-lg flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-center mt-8">Create Scholarship</h2>
                <div className="">
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-center px-10 py-5">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={type} onChange={(e) => setType(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
                        </div>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                            <input type="number" value={numAvailable} onChange={(e) => setNumAvailable(e.target.value)}  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Number Available</label>
                        </div>
                        <div className="flex flex-row justify-center">
                            <button type="submit" className="transition-all mx-5 px-4 rounded-md border shadow-md border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500">Create Scholarship</button>
                            <button onClick={onCancelClick} className="transition-all backdrop:mx-5 px-4 rounded-md border shadow-md border-red-500 hover:bg-red-500 hover:text-white text-red-500">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} export default EditScholarshipForm;
