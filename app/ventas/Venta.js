"use client"
import React, { useState, useEffect } from 'react';
import '../css/EstilosVenta.css';
import '../css/EstilosCards.css';
import Swal from 'sweetalert2';

const Ventas = () => {
    const [placaMadreProducts, setPlacaMadreProducts] = useState([]);
    const [procesadoresProducts, setProcesadoresProducts] = useState([]);
    const [memoriasRAMProducts, setMemoriasRAMProducts] = useState([]); // Nuevo estado
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/productosA')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener productos');
                }
                return response.json();
            })
            .then((data) => {
                setPlacaMadreProducts(data.slice(4, 8)); // Placa Madre
                setProcesadoresProducts(data.slice(0, 4)); // Procesadores
                setMemoriasRAMProducts(data.slice(12, 16)); // Memorias RAM
                console.log("Memorias RAM:", data.slice(12, 16)); // Verifica los datos de las memorias RAM
            })
            .catch((error) => {
                console.error('Error obteniendo productos:', error);
                setError('No se pudieron cargar los productos. Inténtalo de nuevo más tarde.');
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

    const renderProductCards = (products) => {
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
            {/* Sección de Placa Madre */}
            <div className="container2">
                <h1 className="txt-PlacaMadre">PLACA MADRE</h1>
            </div>
            <div className="card-container">{renderProductCards(placaMadreProducts)}</div>

            {/* Sección de Procesadores */}
            <div className="container2">
                <h1 className="txt-Procesadores">PROCESADORES</h1>
            </div>
            <div className="card-container">{renderProductCards(procesadoresProducts)}</div>
            {/* Sección de Memorias RAM */}
        <div className="container2">
            <h1 className="txt-MemoriasRAM">MEMORIAS RAM</h1>
        </div>
        <div className="card-container">{renderProductCards(memoriasRAMProducts)}</div>
    </div>
    );
};

export default Ventas;

/* tengo un problema con un codigo, al momento de darle click al boton de agregar ya sea con procesador o memoria ram, me pone que no se puede agregar al carrito, pero al agregar las placas madres, esas si me deja, te voy a pasar el codigo */