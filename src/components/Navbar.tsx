


/*
function Navbar() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Ray Tang</Link>
                    </li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
} */

import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav className = "nav">
            <NavLink to="/" className = "site-title" >RAY TANG • 唐瑞</NavLink>
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/experience">Experience</NavLink>
                </li>
                <li>
                <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                <NavLink to="/piano">Piano</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}



export default Navbar