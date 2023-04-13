import HeaderSection from "../../components/header"
import Menu from "../../components/menu"

function Login(){
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection> 
                <div className='h-full w-full flex flex-row'>
                <Menu></Menu>
                <p>This is the log in page, this is where the log in page will exist</p>
                </div>

            </div>
        </div>
    )

}export default Login