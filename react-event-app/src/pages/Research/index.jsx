import axios from "axios";
import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Research() {
    const [research, setResearch] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadResearch();
    }, [])

    const loadResearch = async () => {
        const result = await axios.get("http://localhost:8081/research");
        console.log(result.data)
        setResearch(result.data);
    }

    const editResearch = async (id) => {
        navigate(`/update-research/${id}`)
    }

    const deleteResearch = async (id) => {
        await axios.delete(`http://localhost:8081/research/${id}`)
        loadResearch();
    }


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
                    <div className="m-9 relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full marker:text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Opportunity ID
                                    </th>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" class="text-center border px-9 py-3">
                                        Subject
                                    </th>
                                    <th scope="col" class="text-center border px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    research.map((research) => (
                                        <tr class="bg-white border-b">
                                            <th scope="row" class="text-center border  px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{research.opportunityId}</th>
                                            <td class="text-center border  px-6 py-4">{research.title}</td>
                                            <td class="text-center border px-6 py-4">{research.type}</td>
                                            <td class="text-center border px-6 py-4">{research.subject}</td>
                                            <td class="text-center border px-6 py-4">
                                                <a onClick={() => editResearch(research.opportunityId)} className="transition-all mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">Edit</a>
                                                <a onClick={() => deleteResearch(research.opportunityId)} className="transition-all mx-2 font-medium text-red-600 dark:text-red-600 hover:underline hover:cursor-pointer">Delete</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-row justify-center h-10 my-7">
                        <button value="create-research" type="button" onClick={handleClick} className="hover:bg-slate-100 transition-all rounded-md justify-center w-2/12 border shadow-md font-poppins text-black font-semibold mx-2">Create Research Opportunity</button>
                    </div>
                </div>
            </div>
        </div>
    )
} export default Research;