import { useNavigate } from 'react-router-dom';
import React from "react";
import HeaderSection from '../../components/header';
import Menu from '../../components/menu';

function Home() {
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection> 
                <div className='h-full w-full flex flex-row'>
                <Menu></Menu>
                </div>
            </div>
        </div>
    );
} export default Home;
