import Sidebar from "../../../components/sidebar/Sidebar"
import "./setting.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingwrapper">
                <div className="settingstitle">
                    <span className="settingsupdatetitle">Update your account</span>
                    <span className="settingsdeletetitle">delete account</span>
                </div>
                <form className="settingsform">
                    <label >Profile picture</label>
                    <div className="settingspp">
                        <img src="https://magarticles.magzter.com/articles/14274/442383/5ea1553d5250c/Chris-Hemsworth.jpg"  
                        />
                        <label htmlFor="fileinput">
                        <i className="settingsppicon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileinput" style={{display:"none"}}/>
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder="Rudheer" />
                    <label >Email</label>
                    <input type="email" placeholder="Rudheer1992@gmal.com" />
                    <label >Password</label>
                    <input type="password" />
                    <button className="settingssubmit">submit</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
