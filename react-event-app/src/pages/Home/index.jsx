import React from "react";
import HeaderSection from '../../components/header';
import Navigation from "../../components/navigation";

function Home() {
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection> 
                <Navigation></Navigation>
            </div>
        </div>
    );
} export default Home;
