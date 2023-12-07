"use client"
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import '../../css/home-build.css';


export default function Home() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://54.80.112.93:3001/productosA')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener productos');
                }
                return response.json();
            })
            .then((data) => setProducts(data.slice(4, 8))) // Solo toma los primeros 4 elementos
            .catch((error) => {
                console.error('Error obteniendo productos:', error);
                setError('No se pudieron cargar los productos. Inténtalo de nuevo más tarde.');
            });
    }, []);

    const handleCarritoClick = (product) => {
        fetch('http://54.80.112.93:3001/carf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al agregar al carrito');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Producto agregado al carrito:', data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Se agregó al carrito',
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'my-custom-alert',
                    },
                });
            })
            .catch((error) => {
                console.error('Error al agregar al carrito:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error al agregar al carrito',
                    text: `Hubo un problema al agregar el producto al carrito. Detalles: ${error.message}`,
                });
            });

    };

    return (
        <>
            <nav className="navbar">
        <div className="logo">
          <Link href="/">
          <img
            src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3NjQ4NjZfRk9FY2I?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
            style={{ width: '64px', height: '64px' }}
          />
          </Link>
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
            <div>
                <div style={{ display: 'flex' }}>
                    <div className="sidebar">
                        <Link href="/Build-pc/Tarjeta">
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
                    <div className="main-content">
                        <div className="top-bar">
                            <p>TARJETAS MADRE</p>
                        </div>
                        <div className="slider">
                            {error && <p className="error-message">{error}</p>}
                            {products.map((product) => (
                                <div key={product.id} className="slider-card">
                                    <img src={product.image} width={150} height={150} />
                                    <div className="slider-card-text">
                                        <h2>{product.title}</h2>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="cart-section">
                                        <p>${product.price}</p>
                                        <img
                                            src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjEzMzc1NDZfc05UemI?session_id=0b2b02a3ebe29ae0379d5aa006b1964476fae68e4970c37b2ed79197e0978d1c&inline=1&preview=1"
                                            alt="Carrito de compras"
                                            width={120}
                                            height={120}
                                            onClick={() => handleCarritoClick(product)}
                                        />
                                        <p className="add-text">Agregar</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p className="text-left">Derechos de autor</p>
                <p className="text-right">Sobre Nosotros</p>

                <Link href="/login">
                    <img
                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA4NTUyNDZfT2s5VEY?session_id=2acad8b2847b1c517031e09ab5a08796e98bef335d368832917e5c092c28faa2&inline=1&preview=1"
                        style={{ width: "40px", height: "40px" }}
                    />
                </Link>
                <Link href="/login">
                    <img
                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA4NTUyNjZfaTdQN0E?session_id=2acad8b2847b1c517031e09ab5a08796e98bef335d368832917e5c092c28faa2&inline=1&preview=1"
                        style={{ width: "40px", height: "40px" }}
                    />
                </Link>
                <Link href="/login">
                    <img
                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA4NTUyMjBfZ0hOUDE?session_id=2acad8b2847b1c517031e09ab5a08796e98bef335d368832917e5c092c28faa2&inline=1&preview=1"
                        style={{ width: "40px", height: "40px" }}
                    />
                </Link>
            </footer>
        </>
    );
};