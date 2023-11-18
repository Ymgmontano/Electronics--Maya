import Link from "next/link";
import "./css/footer.css"


const Footer = () => {
    return (
        <footer className="footer">
            <p className="text-left">Derechos de autor</p>
            <p className="text-right">Sobre Nosotros</p>

            <Link href="/login">
                <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA4NTUyNDZfT2s5VEY?session_id=2acad8b2847b1c517031e09ab5a08796e98bef335d368832917e5c092c28faa2&inline=1&preview=1"
                    style={{ width: '40px', height: '40px' }}
                />
            </Link>
            <Link href="/login">
                <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA4NTUyNjZfaTdQN0E?session_id=2acad8b2847b1c517031e09ab5a08796e98bef335d368832917e5c092c28faa2&inline=1&preview=1"
                    style={{ width: '40px', height: '40px' }}
                />
            </Link>
            <Link href="/login">
                <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA4NTUyMjBfZ0hOUDE?session_id=2acad8b2847b1c517031e09ab5a08796e98bef335d368832917e5c092c28faa2&inline=1&preview=1"
                    style={{ width: '40px', height: '40px' }}
                />
            </Link>
        </footer>

    );
};

export default Footer;
