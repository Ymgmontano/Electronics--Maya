"use client"
import React, { } from 'react';
import Link from 'next/link';
import "../../css/home-build.css";
import Swal from 'sweetalert2';


export default function Home() {
    const handleCarritoClick = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agregó al carrito',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'my-custom-alert', // Aplica tu clase personalizada aquí
            }
        });
    }

    const handleCancel = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Se borró la selección',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'my-custom-alert', // Aplica tu clase personalizada aquí
            }
        });
    }
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3NjQ4NjZfRk9FY2I?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
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
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA4NTMxMjBfQVA2VUg?session_id=2acad8b2847b1c517031e09ab5a08796e98bef335d368832917e5c092c28faa2&inline=1&preview=1"
                            style={{ width: '64px', height: '64px' }}
                        />
                    </Link>
                </div>
            </nav>
            <div>
                <div style={{ display: 'flex' }}>
                    <div className="sidebar">
                        <Link href="/Build-pc/Procesadores">
                            <div className="menu-item">PROCESADORES</div>
                        </Link>
                        <Link href="/Build-pc/Motherboard" >
                            <div className="menu-item">PLACA MADRE</div>
                        </Link>
                        <Link href="/Build-pc/Ventiladores" >
                            <div className="menu-item">VENTILADORES</div>
                        </Link>
                        <Link href="/Build-pc/Ram" >
                            <div className="menu-item">MEMORIAS RAM</div>
                        </Link>
                        <Link href="/Build-pc/Gabinetes" >
                            <div className="menu-item">GABINETES</div>
                        </Link>
                        <Link href="/Build-pc/GPU">
                            <div className="menu-item">TARJETAS GRÁFICAS </div>
                        </Link>
                    </div>

                    {/* Contenido principal */}
                    <div className="main-content">
                        {/* Barra superior con texto */}
                        <div className="top-bar">
                            <p>PLACA MADRE</p>
                        </div>
                        <div className="slider">
                            {/* Tarjeta 1 */}
                            <div className="slider-card">
                                <img
                                    src="https://i5.walmartimages.com.mx/mg/gm/3pp/asr/5ff52744-c1c4-4c36-9bc3-485dfe54fe08.94df72ceb22ded3938614c77cc0ac168.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                                    width={50}
                                    height={50}
                                    onClick={handleCarritoClick}
                                />
                                <div className="slider-card-text">
                                    <h2>Tarjeta Madre B75-S</h2>
                                    <p>Placa base para PC ATX 4 PC DDR3 Memoria 32GB Computadoras de escritorio Placa b.</p>
                                </div>
                                <div className="cart-section">
                                    <p>$8,399.00</p>
                                    <img
                                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEzMzc1NDZfc05UemI?session_id=0b2b02a3ebe29ae0379d5aa006b1964476fae68e4970c37b2ed79197e0978d1c&inline=1&preview=1"
                                        alt="Carrito de compras"
                                        width={50}
                                        height={50}
                                        onClick={handleCarritoClick}
                                    />
                                    <p className="add-text">Agregar</p>
                                </div>
                            </div>

                            {/* Tarjeta 2 */}
                            <div className="slider-card">
                                <img
                                    src="https://www.asus.com/media/odin/websites/MX/News/egeudlmmzdyg3wv1/890e5811-aa33-c629-08eb-a9892ebefa13.jpg"
                                    alt="Imagen 2"
                                    width={150}
                                    height={150}
                                    onClick={handleCarritoClick}
                                />
                                <div className="slider-card-text">
                                    <h2>Asus ROG STRIX B550-F GAMING AM4</h2>
                                    <p> 8 núcleos optimizados para plataformas de juegos con FPS altos.</p>
                                </div>
                                <div className="cart-section">
                                    <p>$8,399.00</p>
                                    <img
                                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEzMzc1NDZfc05UemI?session_id=0b2b02a3ebe29ae0379d5aa006b1964476fae68e4970c37b2ed79197e0978d1c&inline=1&preview=1"
                                        alt="Carrito de compras"
                                        width={50}
                                        height={50}
                                        onClick={handleCarritoClick}
                                    />
                                    <p className="add-text">Agregar</p>
                                </div>
                            </div>

                            {/* Tarjeta 3 */}
                            <div className="slider-card">
                                <img
                                    src="https://lb1.highpro.com.mx/2240-large_default/tarjeta-madre-asus-rog-strix-b550-f-gaming-am4.jpg"
                                    alt="Imagen 3"
                                    width={150}
                                    height={150}
                                    onClick={handleCarritoClick}
                                />
                                <div className="slider-card-text">
                                    <h2>TUF Gaming X570-Pro WiFi II</h2>
                                    <p>ofrece confiabilidad probada en batalla para cualquier compilación gaming.</p>
                                </div>
                                <div className="cart-section">
                                    <p>$8,399.00</p>
                                    <img
                                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEzMzc1NDZfc05UemI?session_id=0b2b02a3ebe29ae0379d5aa006b1964476fae68e4970c37b2ed79197e0978d1c&inline=1&preview=1"
                                        alt="Carrito de compras"
                                        width={50}
                                        height={50}
                                        onClick={handleCarritoClick}
                                    />
                                    <p className="add-text">Agregar</p>
                                </div>
                            </div>

                            {/* Tarjeta 4 */}
                            <div className="slider-card">
                                <img

                                    src="https://www.pchmayoreo.com/pub/media/catalog/product/1/9/195553494632-a-01.png"
                                    alt="Imagen 4"
                                    width={150}
                                    height={150}
                                    onClick={handleCarritoClick}
                                />
                                <div className="slider-card-text">
                                    <h2>ASUS ROG STRIX Z690-E GAMING WIFI DDR5LGA1700/WIFI/RGB</h2>
                                    <p>Cantidad de núcleos. 10 ; Cantidad de subprocesos. 20 ; Frecuencia turbo máxima. 5.30 GHz ; Frecuencia de Intel® Thermal Velocity Boost.</p>
                                </div>
                                <div className="cart-section">
                                    <p>$8,399.00</p>
                                    <img
                                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEzMzc1NDZfc05UemI?session_id=0b2b02a3ebe29ae0379d5aa006b1964476fae68e4970c37b2ed79197e0978d1c&inline=1&preview=1"
                                        alt="Carrito de compras"
                                        width={50}
                                        height={50}
                                        onClick={handleCarritoClick}
                                    />
                                    <p className="add-text">Agregar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botones "Comprar ahora" y "Cancelar" en la esquina inferior derecha */}
                <div className="button-container">
                    <Link href="/Carrito">
                        <button className="button">Comprar ahora</button>
                    </Link>
                    <button className="button cancel-button" onClick={handleCancel} >Cancelar</button>
                </div>
            </div>
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
        </>
    );
}