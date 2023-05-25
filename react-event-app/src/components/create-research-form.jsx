import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Component for creating an Research opportunity
function CreateResearchForm() {
    const navigate = useNavigate();

    //State variables for form inputs
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [subject, setSubject] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    // Validation checks
        if (!title) {
            alert('Title is required.');
            return;
        }

        if (!subject) {
            alert('Subject is required.');
            return;
        }
        // Send a POST request to create the event using axios
        await axios.post("http://localhost:8081/research", {
            title: title,
            type: type,
            subject: subject,
        });
        // Navigate to the events page after the event is created
        navigate('/research');
    };
    // Function to handle cancel button click
    const onCancelClick = (e) => {
        e.preventDefault()
        navigate('/research');
    }
    // JSX code for the form UI
    return (
        <div className="w-full h-full flex justify-center mt-28">
            <div className="border rounded-lg shadow-lg flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-center mt-8 mx-11">Create Research Opportunity</h2>
                <div className="">
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-center px-10 py-5">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" value={type} onChange={(e) => setType(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <button type="submit" className="transition-all mx-5 px-4 rounded-md border shadow-md border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500">Create</button>
                            <button onClick={onCancelClick} className="transition-all backdrop:mx-5 px-4 rounded-md border shadow-md border-red-500 hover:bg-red-500 hover:text-white text-red-500">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} export default CreateResearchForm;