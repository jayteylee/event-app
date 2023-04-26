function LoginForm() {
    return (
            <div className="basis-4/5 relative w-full h-full flex flex-col justify-center">
                <div>
                <label>Username</label>
                <input type='text' placeholder="Enter Username" required></input>
                </div>
                <div>
                <label>Password</label>
                <input type='text' placeholder="Enter Password" required></input>
                </div>
            </div>
    )
} export default LoginForm