import {Link} from "react-router-dom"



function Login(){
    return(
        <div>
            <h2>Welcome to Convenent University!</h2>
            <form>
                <input type="text" placeholder="Username Or Email"/>
                <input type="text" placeholder="Password" />
                <button>Login</button>
                <h4>Don't have an account? <p><Link to="/signUp">Sign Up</Link></p></h4>
            </form>

        </div>
    )
}
export default Login