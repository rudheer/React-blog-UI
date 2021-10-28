import "./header.css"

export default function header() {
    return (
        <div className="header">
            <div className="headertitles">
                <span className="headertitlessm">React and Node</span>
                <span className="headertitleslg">Blog</span>
            </div>
            <img
            className="headerimg"
            src="https://www.esa.int/var/esa/storage/images/newsroom/photos/19716866-44-eng-GB/Photos_pillars.jpg"
            alt="its visisble"
            />
        </div>
    )
}
