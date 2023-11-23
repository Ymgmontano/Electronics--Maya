"use client"
import React, { useState, useEffect } from 'react';
import '../css/EstilosVenta.css';
import '../css/EstilosCards.css';
import Swal from 'sweetalert2';

const Ventas = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/productosA')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener productos');
                }
                return response.json();
            })
            .then((data) => setProducts(data.slice(4, 8)))
            .catch((error) => {
                console.error('Error obteniendo productos:', error);
                setError(
                    'No se pudieron cargar los productos. Inténtalo de nuevo más tarde.'
                );
            });
    }, []);

    const handleCarritoClick = (product) => {
        fetch('http://127.0.0.1:3001/carf', {
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

    const renderProductCards = () => {
        return products.map((product) => (
            <div key={product.id} className="card">
                <div className="price-and-favorite">
                    <div className="price">${product.price}</div>
                    <span className="favorite-icon">❤</span>
                </div>
                <div className="zoom-container">
                    <img
                        src={product.image}
                        alt="Imagen del producto"
                        className="product-image"
                    />
                </div>
                <div className="text-section">
                    <h2 className="title">{product.title}</h2>
                </div>
                <button
                    onClick={() => handleCarritoClick(product)}
                    className="add-to-cart"
                >
                    Agregar
                </button>
            </div>
        ));
    };

    return (
        <div>
            <div className="container">
                <h1>ARMA TU EQUIPO</h1>
            </div>
            <div className="container2">
                <h1 className="txt-PlacaMadre">PLACA MADRE</h1>
            </div>
            <div className="card-container">{renderProductCards()}</div>
            <div className="container2">
                <h1 className="txt-PlacaMadre">PROCESADORES</h1>
            </div>
            <div className="card-container">{renderProductCards()}</div>
        </div>
    );
};

export default Ventas;
