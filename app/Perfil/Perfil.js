import Link from "next/link";
import "../css/perfil.css";

function Cuenta() {
    return (
        <>
            <div className="perfil-container">
                <div className="account-image">
                    <img
                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEwMDkxODZfYks1VGk?session_id=9ad58c2e3edfc4b69505755d9ca4b2f9ffeb55224a91cec59d115d5de95a4f3e&inline=1&preview=1"
                        className="perfil-image1"
                    />
                    <p>Perfil</p>
                </div>
                <div className="account-image">
                    <Link href="/Carrito">
                        <img
                            src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEyMjE1OTlfc2g2cXo?session_id=dab058506b51eac5cdc82b045e77abb823f65833b66269f75f3e7428a80aa08f&inline=1&preview=1"
                            className="perfil-image"
                        />
                        <p>Mis Pedidos</p>
                    </Link>
                </div>
                <div className="account-image">
                    <Link href="/Carrito">
                        <img
                            src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEyMjE2MDBfZjlMRlg?session_id=dab058506b51eac5cdc82b045e77abb823f65833b66269f75f3e7428a80aa08f&inline=1&preview=1"
                            className="perfil-image"
                        />
                        <p>Volver a Comprar</p>
                    </Link>
                </div>
            </div>
            <div className="FQ">
                <div className="Text-aling-FQ">
                    <b>PREGUNTAS FRECUENTES</b>
                    <p className="Text-FQ">¿Necesitas una respuesta rápida?</p>
                    <p className="Text-P">
                        Cuando comiences a comprender cómo funciona la construcción de ordenadores,
                        le surgirán <br></br> un sinfín de preguntas. No está solo: hemos creado una lista de preguntas
                        frecuentes organizadas por categorías.
                    </p>
                </div>
            </div>
            <div className="FQ">
                <div className="Text-aling-FQ">
                    <b>HARWARE DE LA PC</b>
                    <p className="Text-HW">
                        ¿Qué se necesita para armar tu PC?
                        <Link href="https://es.msi.com/Landing/how-to-build-a-pc">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEyMjkyNTdfM1FiRGY?session_id=dab058506b51eac5cdc82b045e77abb823f65833b66269f75f3e7428a80aa08f&inline=1&preview=1"
                                className="arrow-image"
                            />
                        </Link>
                    </p>
                    <p className="Text-HW">
                        ¿Qué es la CPU?
                        <Link href="https://www.xataka.com/basics/cpu-que-como-sirve">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEyMjkyNTdfM1FiRGY?session_id=dab058506b51eac5cdc82b045e77abb823f65833b66269f75f3e7428a80aa08f&inline=1&preview=1"
                                className="arrow-image2"
                            />
                        </Link>
                    </p>
                    <p className="Text-HW">
                        ¿Qué es la RAM?
                        <Link href="https://www.xataka.com/basics/memoria-ram-que-sirve-como-mirar-cuanta-tiene-tu-ordenador-movil">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEyMjkyNTdfM1FiRGY?session_id=dab058506b51eac5cdc82b045e77abb823f65833b66269f75f3e7428a80aa08f&inline=1&preview=1"
                                className="arrow-image3"
                            />
                        </Link>
                    </p>
                </div>
            </div>
            <div className="MC">
                <div className="Text-aling-FQ">
                    <b>MI CUENTA</b>
                    
                    <p className="Text-HW">
                        Facturación
                        <Link href="/login">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEyMjkyNTdfM1FiRGY?session_id=dab058506b51eac5cdc82b045e77abb823f65833b66269f75f3e7428a80aa08f&inline=1&preview=1"
                                className="arrow-image7"
                            />
                        </Link>
                    </p>
                    <p className="Text-HW">
                        Ayuda
                        <Link href="https://drive.google.com/drive/folders/16SN9Wsf3oNtT8FY5b3Id2Ykx_kM2q2x-?usp=sharing">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEyMjkyNTdfM1FiRGY?session_id=dab058506b51eac5cdc82b045e77abb823f65833b66269f75f3e7428a80aa08f&inline=1&preview=1"
                                className="arrow-image8"
                            />
                        </Link>
                    </p>
                </div>
            </div>
            <div className="EXIT-BT">

            </div>
        </>
    );
}

export default Cuenta;
