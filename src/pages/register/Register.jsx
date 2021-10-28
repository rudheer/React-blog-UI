import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="register">
            <span className="registertitle">Register</span>
            <form  className="registerform">
                <label >Username</label>
                <input type="text" className="registerinput" placeholder="Enter yout username..." />
                <label >Email</label>
                <input type="text" className="registerinput" placeholder="Enter yout email..." />
                <label >Password</label>
                <input type="password" className="registerinput" placeholder="Enter yout password..." />
                <button className="registerbutton">register</button>
                <button className="registerloginbutton">
                    <Link to="/login" className="link">login</Link>
                </button>
            </form>
        </div>
    )
}
