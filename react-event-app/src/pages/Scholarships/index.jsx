import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";

function Scholarships() {
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection> 
                <div className='h-full w-full flex flex-col'>
                <Navigation></Navigation>
                <p>This is the Scholarships page</p>
                </div>

            </div>
        </div>
    )
}export default Scholarships;