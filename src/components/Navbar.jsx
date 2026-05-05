import { NavLink } from "react-router-dom"
import styles from "../styles/Navbar.module.css"

function Navbar() {

    return (
        <>
            <nav className={styles.navbar}>

                <NavLink to="/" className={styles.navLink}>Home</NavLink>
                <NavLink to="About" className={styles.navLink} >About</NavLink>
                <NavLink to="Contacts" className={styles.navLink}>Contacts</NavLink>
                <NavLink to="Projects" className={styles.navLink}>Projects</NavLink>

            </nav>
        </>
    )
}

export default Navbar