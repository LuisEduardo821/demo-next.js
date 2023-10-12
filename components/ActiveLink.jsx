import { useRouter } from "next/router"
import Link from "next/link"

const style = {
    color: '#0070f3',
    textDecoration: 'underline',
}

export const ActiveLink = ({ text, href }) => {

    const { asPath } = useRouter();
    console.log(asPath);
    return (
        <Link style={asPath === href ? style : null} href={href}>{text}</Link>
    )
}

