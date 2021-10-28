import "./topbar.css"
import { Link } from "react-router-dom"

export default function topbar() {
    return (
        <div class="top">
            <div className="topleft">
            <i className="topicon fab fa-facebook"></i>
            <i className="topicon fab fa-instagram"></i>
            <i className="topicon fab fa-twitter"></i>
            </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className="toplistitem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="toplistitem">
                    <Link to="/about" className="link">ABOUT</Link>
                    </li>
                    <li className="toplistitem">
                    <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="toplistitem">
                    <Link to="/login" className="link">LOG IN</Link>
                    </li>
                    <li className="toplistitem">
                    <Link to="/register" className="link">REGISTER</Link>
                    </li>
                </ul>
            </div>
            <div className="topright">
            <i className="topsearchicon fas fa-search"></i>
            </div>
        </div>
    )
}

