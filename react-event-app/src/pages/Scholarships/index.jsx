import { useEffect, useState } from "react";
import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Scholarships() {
    const [scholarship, setScholarship] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadScholarship();
    }, [])

    const loadScholarship = async () => {
        const result = await axios.get("http://localhost:8081/scholarships");
        console.log(result.data)
        setScholarship(result.data);
    }

    const editScholarship = async (id) => {
        navigate(`/update-scholarship/${id}`)
    }

    const deleteScholarship = async (id) => {
        await axios.delete(`http://localhost:8081/scholarships/${id}`)
        loadScholarship();
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
                    <h2 className="text-3xl font-bold text-center mt-8">Scholarships</h2>
                    <div className="m-9 relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full marker:text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Scholarship ID
                                    </th>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" class="text-center border px-9 py-3">
                                        Subject
                                    </th>
                                    <th scope="col" class="text-center border px-9 py-3">
                                        Number Available
                                    </th>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    scholarship.map((scholarship) => (
                                        <tr class="bg-white border-b">
                                            <th scope="row" class="text-center border  px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{scholarship.scholarshipId}</th>
                                            <td class="text-center border  px-6 py-4">{scholarship.name}</td>
                                            <td class="text-center border px-6 py-4">{scholarship.type}</td>
                                            <td class="text-center border px-6 py-4">{scholarship.subject}</td>
                                            <td class="text-center border px-6 py-4">{scholarship.numAvailable}</td>
                                            <td class="text-center border px-6 py-4">
                                                <a onClick={() => editScholarship(scholarship.scholarshipId)} className="transition-all mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">Edit</a>
                                                <a onClick={() => deleteScholarship(scholarship.scholarshipId)} className="transition-all mx-2 font-medium text-red-600 dark:text-red-600 hover:underline hover:cursor-pointer">Delete</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-row justify-center h-10 my-7">
                        <button value="create-scholarship" type="button" onClick={handleClick} className="hover:bg-slate-100 transition-all rounded-md justify-center w-2/12 border shadow-md font-poppins text-black font-semibold mx-2">Create Scholarship</button>
                    </div>
                </div>
            </div>
        </div>
    )
} export default Scholarships;