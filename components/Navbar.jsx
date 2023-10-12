import Link from "next/link"
import styles from "@/components/Navbar.module.css"
import { ActiveLink } from '@/components/ActiveLink'

export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            <ActiveLink text="Home" href={"/"} />
            <ActiveLink text="About" href={"/about"} />
            <ActiveLink text="Contact" href={"/contact"} />
        </nav>
    )
}

