import HeaderSection from "../../components/header";
import Menu from "../../components/menu";

function Upcoming() {
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection> 
                <div className='h-full w-full flex flex-row'>
                <Menu></Menu>
                <p>This is the upcoming events page, here the cards of the events will be displayed</p>
                </div>

            </div>
        </div>
    )
}export default Upcoming;