import Sidebar from "../../../components/sidebar/Sidebar"
import Singlepost from "../../../components/singlepost/Singlepost"
import "./single.css"

export default function single() {
    return (
        <div className="single">
            <Singlepost/>
            <Sidebar/>
        </div>
    )
}
