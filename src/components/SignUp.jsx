import "./SignUp.css"


function SignUp(){
    return(
        <div className="signup-container">
            <form>
                <h2>Create an Account</h2>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="number" placeholder="Date of Birth" />
                <input type="email" placeholder="Enter your Email" />
                <input type="text" placeholder="Create Password" />
            <   button>Create Account</button>
            </form>


        </div>
    )
}
export default SignUp