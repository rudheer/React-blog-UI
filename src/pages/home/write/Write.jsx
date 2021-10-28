import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <form className="writeform">
                <div className="writeformgroup">
                    <label htmlFor="fileinput">
                    <i className="writeicon fas fa-plus"></i>
                    </label>
                    <input type="file"  id="fileinput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeinput" />
                </div>
                <div className="writeformgroup">
                    <textarea placeholder="Tell your story..." className="writeinput writetext" type="text"></textarea>
                </div>
                <button className="writesubmit">Publish</button> 
            </form>
        </div>
    )
}
