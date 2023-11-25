import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnLog, setBtnLog] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to= "/">Home</Link>   {/* refers to when we click on About, then it renders only the "/about" from appRouter  without disturbing header component / we can also use :- heanker tag: <a href="/about">About<a/> */}
                        </li>
                    <li>
                        <Link to= "/about"> About</Link>
                        </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                    <li>Cart</li>
                    <button 
                    className="log" 
                    onClick={()=>{
                        btnLog == "Login" ? setBtnLog("Logout") : setBtnLog("Login")
                        }}>{btnLog}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;