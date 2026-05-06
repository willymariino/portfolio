import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <>
            <nav className="navbar">

                <NavLink to="/" className="navLink">Home</NavLink>
                <NavLink to="About" className="navLink" >About</NavLink>
                <NavLink to="Contacts" className="navLink">Contacts</NavLink>
                <NavLink to="Projects" className="navLink">Projects</NavLink>

            </nav>
        </>
    )
}

export default Navbar