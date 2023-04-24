import HeaderSection from "../../components/header"
import LoginForm from "../../components/login-form"
import Navigation from "../../components/navigation"

function Login() {
    return (
        <div className='w-screen h-screen'>
            <div className='relative flex flex-col h-full'>
                <HeaderSection></HeaderSection>
                <div className='h-full w-full flex flex-col'>
                    <Navigation></Navigation>
                    <LoginForm></LoginForm>
                </div>

            </div>
        </div>
    )

} export default Login