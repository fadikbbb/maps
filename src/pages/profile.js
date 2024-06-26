import { Link, useNavigate } from "react-router-dom";
function Profile () {
    const navigator = useNavigate()
    return (
        <div>
            <Link to={"/dashboard"}>dashboard</Link>
            <br/>
            <button onClick={() => {
                window.localStorage.removeItem("login")
                navigator("/")}}>logout</button>
        </div>
    )
}

export default Profile