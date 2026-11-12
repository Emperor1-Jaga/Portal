import {Link} from "react-router-dom"
import  "./SignUp"
import "./Navigation.css"



function Nav(){
    return(
        <div className="container">
            <div className="content">
                <nav className="links">

                    <h2>Convenent University</h2>
                    <ul>
                        <li><Link to = "/home">Home</Link></li>
                        <li><Link to = "/about">About Us</Link></li>
                        <li><Link to = "/contact">Contact</Link></li>
                        <li><Link to = "/admin">Admin</Link></li>
                        <li><Link to = "/programs">Programs</Link></li>
                    </ul>
                <div className="logContainer">
                    <input type="search" id="search" placeholder="Search" />
                    <div className="logs">
                        <div><Link to="/login" id="login">Login/</Link></div>
                        <div><Link to="/signUp" id="signup">Sign Up</Link></div>
                    </div>
                </div>
                </nav>

            </div>

        </div>
    )
}
export default Nav