import { useEffect, useState } from "react";
import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Liasons() {
    const [liasons, setLiasons] = useState([]);

    useEffect(() => {
        loadLiasons();
    }, []);

    const loadLiasons = async () => {
        const result = await axios.get("http://localhost:8081/liasons");
        console.log(result.data)
        setLiasons(result.data);
    }

    const navigate = useNavigate();

    const deleteLiason = async (id) => {
        await axios.delete(`http://localhost:8081/liasons/${id}`)
        loadLiasons();
    }

    const editLiason = async (id) => {
        navigate(`/update-liason/${id}`)
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
                    <div className="flex flex-row w-full h-full">
                        <div className="flex flex-col w-1/5 h-full bg-slate-50 shadow-lg">
                            <h2 className="text-3xl font-bold text-center mt-8">Welcome back!</h2>
                            <div className="flex flex-row justify-center h-10 my-7">
                                <button value="create-liason" type="button" onClick={handleClick} className="hover:bg-slate-100 transition-all rounded-md justify-center w-3/5 border shadow-md font-poppins text-black font-semibold mx-2">Create Liason</button>
                            </div>
                        </div>
                        <div className="flex flex-col w-4/5 h-full">
                            <h2 className="text-3xl font-bold text-center mt-8">Liasons</h2>
                            <div className="m-9 relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full marker:text-sm text-left text-gray-500">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" class="text-center border px-6 py-3">
                                                Liason ID
                                            </th>
                                            <th scope="col" class="text-center border px-6 py-3">
                                                Title
                                            </th>
                                            <th scope="col" class="text-center border px-9 py-3">
                                                Start Time
                                            </th>
                                            <th scope="col" class="text-center border px-9 py-3">
                                                Location
                                            </th>
                                            <th scope="col" class="text-center border px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            liasons.map((liason) => (
                                                <tr class="bg-white border-b">
                                                    <th scope="row" class="text-center border  px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{liason.liasonId}</th>
                                                    <td class="text-center border  px-6 py-4">{liason.title}</td>
                                                    <td class="text-center border px-6 py-4">{liason.startTime}</td>
                                                    <td class="text-center border px-6 py-4">{liason.location}</td>
                                                    <td class="text-center border px-6 py-4">
                                                        <a onClick={() => editLiason(liason.liasonId)} className="transition-all mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">Edit</a>
                                                        <a onClick={() => deleteLiason(liason.liasonId)} className="transition-all mx-2 font-medium text-red-600 dark:text-red-600 hover:underline hover:cursor-pointer">Delete</a>
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
            </div>
        </div>
    )
} export default Liasons;