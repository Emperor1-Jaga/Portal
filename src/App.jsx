import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom"

import Navigation from "./components/Navigation"
import Login from "./components/Login"
import SignUp from "./components/SignUp"

import Home from "./pages/Home"
import About from "./pages/About"
import Admin from "./pages/Admin"
import Contact from "./pages/Contact"
import Programs from "./pages/Programs"

function LoginContent(){

    const location = useLocation()
    const hidNav = location.pathname === "/login" || location.pathname === "/signUp"
    return(
        <div className="loginContent">
            {!hidNav && <Navigation />}

            <Routes>
                <Route path= "Home" element={<Home/>}/>
                <Route path= "About" element={<About/>}/>
                <Route path= "Contact" element={<Contact/>}/>
                <Route path= "Admin" element={<Admin/>}/>
                <Route path= "Programs" element={<Programs/>}/>

                <Route path="Login" element={<Login/>}/>
                <Route path="SignUp" element={<SignUp/>}/>
            </Routes>

        </div>
    )
}
function App(){
    return(
        <BrowserRouter>
            <LoginContent />
        </BrowserRouter>
    )
}
export default App