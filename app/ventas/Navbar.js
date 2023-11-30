import "../css/navbar.css"
import Link from 'next/link';



const NavbarV = () => {
    return (
        <nav className="navbar">
        <div className="logo">
          <img
            src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3NjQ4NjZfRk9FY2I?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
            style={{ width: '64px', height: '64px' }}
          />
        </div>
        <div className="Inicio">
          <Link href="/Carrito">
            <img
              src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEzMzc1NDZfc05UemI?session_id=0b2b02a3ebe29ae0379d5aa006b1964476fae68e4970c37b2ed79197e0978d1c&inline=1&preview=1"
              alt="Carrito de compras"
              width={50}
              height={50}
            />
          </Link>
          <Link href="/login">
            <img
              src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA4NTMxMjBfQVA2VUg?session_id=2acad8b2847b1c517031e09ab5a08796e98bef335d368832917e5c092c28faa2&inline=1&preview=1"
              style={{ width: '64px', height: '64px' }}
            />
          </Link>
        </div>
      </nav>
    );
};

export default NavbarV;