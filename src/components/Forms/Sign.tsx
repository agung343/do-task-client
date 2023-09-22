import { Form, Link} from "react-router-dom";

interface Props {
    action : "signup" | "login"
}

export default function Sign({action}: Props) {
    return(<>
        <Form method="post" className="form">
            {action === "signup" && (<>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
            </>)}
            <input type="email" id="email" name="email" placeholder="Email" />
            <input type="password" id="password" name="password" placeholder="Password" />
            <div className="actions">
                {action === "login" ? (<>
                    <button className="login-button">Login</button>
                    <p>Dont' have account yet? <Link to="/signup">Signup here</Link></p>
                </>) : (<>
                    <button className="signup-button">Signup</button>
                </>)}
            </div>
        </Form>
    </>)
}



