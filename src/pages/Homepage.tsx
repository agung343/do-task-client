import Sign from "../components/Forms/Sign"

export default function Homepage() {
    return (<>
        <div className="app">
            <div className="app-banner">
                <h1 className="banner-title">Do Task</h1>
                <h3 className="banner-text">Manage Your Task Daily</h3>
            </div>
            <div className="login-form">
                <h3 className="login-text">Login</h3>
                <Sign action="login" />
            </div>
        </div>
    </>)
}