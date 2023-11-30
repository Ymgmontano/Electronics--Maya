import "../css/navbarP.css"
import Link from 'next/link';


const NavbarP = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link href="/">
                    <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3NjQ4NjZfRk9FY2I?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                        style={{ width: '64px', height: '64px' }}
                    />
                </Link>
            </div>
        </nav>
    );
};

export default NavbarP;