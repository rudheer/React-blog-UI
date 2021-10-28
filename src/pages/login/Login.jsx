import "./login.css"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="login">
            <span className="logintitle">Login</span>
            <form  className="loginform">
                <label >Email</label>
                <input type="text" className="logininput" placeholder="Enter yout email..." />
                <label >Password</label>
                <input type="password" className="logininput" placeholder="Enter yout password..." />
                <button className="loginbutton">login</button>
                <button className="loginregisterbutton">
                    <Link to="/register" className="link">Register</Link>
                </button>
            </form>
        </div>
    )
}
