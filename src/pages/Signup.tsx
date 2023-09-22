import Sign from "../components/Forms/Sign";

import "../styles/Signup.css"

export default function Signup() {
    return (<>
        <div className="signup">
            <h1 className="signup-title">Signup Do Task, 
            Start Manage Your Task</h1>
            <div className="signup-form">
                <Sign action="signup" />
            </div>
        </div>
    </>)
}