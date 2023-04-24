import HeaderSection from "../../components/header";
import Navigation from "../../components/navigation";

function Research() {
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection> 
                <div className='h-full w-full flex flex-col'>
                <Navigation></Navigation>
                <p>This is the Research page</p>
                </div>

            </div>
        </div>
    )
}export default Research;