"use client"
import React, { } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import "../../css/home-build.css";


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
                            <p>VENTILADORES</p>
                        </div>
                        <div className="slider">
                            {/* Tarjeta 1 */}
                            <div className="slider-card">
                                <img
                                    src="https://bajapc.com.mx/assets/uploads/sw_yey_4_2023_02_08t152405_744.png?1675899251"
                                    width={50}
                                    height={50}
                                />
                                <div className="slider-card-text">
                                    <h2>Cooler Master - Hyper 212 Black Edition con LGA1700</h2>
                                    <p>Disipador para CPU Disipador y Ventilador para Procesador Cooler Master Hyper 212 Black Edition Con LGA1700 - 120mm X1 Intel y AMD / RR-212S-20PK-R2</p>
                                </div>
                                <div className="cart-section">
                                    <p>$8,399.00</p>
                                    <img
                                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEzMzc1NDZfc05UemI?session_id=0b2b02a3ebe29ae0379d5aa006b1964476fae68e4970c37b2ed79197e0978d1c&inline=1&preview=1"
                                        alt="Carrito de compras"
                                        width={50}
                                        height={50}
                                        onClick={handleCarritoClick}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <p className="add-text">Agregar</p>
                                </div>
                            </div>

                            {/* Tarjeta 2 */}
                            <div className="slider-card">
                                <img
                                    src="https://bajapc.com.mx/assets/uploads/sw_1_372.png?1620856886"
                                    alt="Imagen 2"
                                    width={150}
                                    height={150}
                                />
                                <div className="slider-card-text">
                                    <h2>Cooler Master i71C RGB </h2>
                                    <p>Disipador de calor Cooler Master i71C RGB / Compatible con intel 115X / Aura Sync / RGB Fusion / Ventilador de 120mm</p>
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
                                    src="https://bajapc.com.mx/assets/uploads/sw_1_1448.png?1698956960"
                                    alt="Imagen 3"
                                    width={150}
                                    height={150}
                                    onClick={handleCarritoClick}
                                />
                                <div className="slider-card-text">
                                    <h2>DeepCool AG620 BK ARGB</h2>
                                    <p>Disipador para CPU DeepCool AG620 BK ARGB / 120mm / 300-1850RPM / Negro / R-AG620-BKANMN-G-2</p>
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

                                    src="https://bajapc.com.mx/assets/uploads/sw_1_1446.png?1698955352"
                                    alt="Imagen 4"
                                    width={150}
                                    height={150}
                                    onClick={handleCarritoClick}
                                />
                                <div className="slider-card-text">
                                    <h2> DeepCool AK400 ZERO DARK PLUS</h2>
                                    <p>Disipador DeepCool AK400 ZERO DARK PLUS / 120mm / 500-1650RPM / Negro / R-AK400-BKNNMD-G-1</p>
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