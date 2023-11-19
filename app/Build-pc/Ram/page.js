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
                <div className="center-content">
                    <input type="text" placeholder="Buscar" />
                    <Link href="/">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA4NTQyMDRfbkx6bU0?session_id=2acad8b2847b1c517031e09ab5a08796e98bef335d368832917e5c092c28faa2&inline=1&preview=1"
                            style={{ width: '40px', height: '40px' }}
                        />
                    </Link>
                </div>
                <div className="Inicio">
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
                            <p>MEMORIA RAM</p>
                        </div>
                        <div className="slider">
                            {/* Tarjeta 1 */}
                            <div className="slider-card">
                                <img
                                src='https://bajapc.com.mx/assets/uploads/sw_2_1424.png?1697007189'
                                    width={50}
                                    height={50}
                                    onClick={handleCarritoClick}
                                />
                                <div className="slider-card-text">
                                    <h2>Adata XPG Lancer Black DDR5 8GB 5200MHZ</h2>
                                    <p>Memoria RAM Adata XPG Lancer Black DDR5 8GB 5200MHZ/ AX5U5200C388G CLABK.</p>
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
                                    src="https://bajapc.com.mx/assets/uploads/sw_1_1410.png?1696054712"
                                    alt="Imagen 2"
                                    width={150}
                                    height={150}
                                    onClick={handleCarritoClick}
                                />
                                <div className="slider-card-text">
                                    <h2>RAM DDR4 32GB 1x32 3200MHz Adata XPG Spectrix D50 Titanium</h2>
                                    <p>Memoria RAM DDR4 32GB 1x32 3200MHz Adata XPG Spectrix D50 Titanium / AX4U320032G16A-ST50</p>
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
                                    src="https://bajapc.com.mx/assets/uploads/sw_1_1329.png?1689903155"
                                    alt="Imagen 3"
                                    width={150}
                                    height={150}
                                    onClick={handleCarritoClick}
                                />
                                <div className="slider-card-text">
                                    <h2>Kingston Fury Beast RGB DDR5 / 5200MHz</h2>
                                    <p>Memoria RAM Kingston Fury Beast RGB DDR5 / 5200MHz / 32GB / Non-ECC / CL40 / XMP / KF552C40BBA-32</p>
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

                                    src="https://bajapc.com.mx/assets/uploads/sw_1_1301.png?1687989806"
                                    alt="Imagen 4"
                                    width={150}
                                    height={150}
                                    onClick={handleCarritoClick}
                                />
                                <div className="slider-card-text">
                                    <h2>RAM 8GB DDR4 ADATA / DDR4 2666mhz </h2>
                                    <p>Memoria RAM 8GB DDR4 ADATA / DDR4 2666mhz / PC4-21300 / 1X8 / PC</p>
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