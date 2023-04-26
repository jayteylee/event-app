import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";

function Events() {
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection> 
                <div className='h-full w-full flex flex-col'>
                <Navigation></Navigation>
                <p>This is the upcoming events page, here the cards of the events will be displayed</p>
                </div>

            </div>
        </div>
    )
}export default Events;