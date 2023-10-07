


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




function Navbar() {
    return(
        <nav className = "nav">
            <a href = "/" className = "site-title">RAY TANG</a>
            <ul>
                <li>
                <a href = "/">Home</a>
                </li>
                <li>
                <a href = "/experience">Experience</a>
                </li>
                <li>
                <a href = "/projects">Projects</a>
                </li>
                <li>
                <a href = "/piano">Piano</a>
                </li>
                <li>
                <a href = "/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}



export default Navbar