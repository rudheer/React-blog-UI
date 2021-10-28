import "./post.css"

export default function post() {
    return (
        <div className="post">
            <img 
            className="postimg"
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/cover30.jpg"
            />
            <div className="postinfo">
                <div className="postcats">
                    <span className="postcat">MUSIC</span>
                    <span className="postcat">LIFE</span>
                </div>
                <span className="posttitle">its so bueatiful here</span>
                <hr/>
                <span className="postdate">1 hr ago</span>
            </div>
            <p className="postdec">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
        </div>
    )
}
