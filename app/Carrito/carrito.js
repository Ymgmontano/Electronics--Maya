"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/Carrito.css';

const CarritoV = () => {
    const router = useRouter();

    const [products, setProducts] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3001/carf');
                const data = await response.json();
                const latestProducts = Object.values(data).slice(0, 9);

                setProducts(latestProducts.reduce((acc, product, index) => {
                    acc[`item${index + 1}`] = {
                        quantity: product.quantity || 1,
                        title: product.title || '',
                        price: product.price || 0,
                        image: product.image || '',
                    };
                    return acc;
                }, {}));
                const total = latestProducts.reduce((acc, product) => {
                    return acc + (product.quantity || 1) * (product.price || 0);
                }, 0);

                setTotalPrice(total);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const incrementQuantity = (item) => {
        setProducts((prevProducts) => ({
            ...prevProducts,
            [item]: {
                ...prevProducts[item],
                quantity: (prevProducts[item].quantity || 1) + 1,
            },
        }));
    };

    const decrementQuantity = (item) => {
        if (products[item].quantity > 1) {
            setProducts((prevProducts) => ({
                ...prevProducts,
                [item]: {
                    ...prevProducts[item],
                    quantity: (prevProducts[item].quantity || 1) - 1,
                },
            }));
        }
    };

    const calculateTotalPrice = () => {
        return Object.keys(products).reduce((acc, item) => {
            return acc + (products[item].quantity || 1) * (products[item].price || 0);
        }, 0);
    };

    const eliminarProducto = (item) => {
        const { [item]: _, ...newProducts } = products;
        setProducts(newProducts);
    };

    const redirigirAotraPagina = () => {
        router.push('/Metodos-Pago');
    };

    return (
        <div className="page-container">
            <div className="header">
                <p className="text1">Categorías</p>
            </div>
            <div className="container">
                <div className="Img">
                    <div className="image-wrapper"></div>
                    <p className="text-center">Total a Pagar: $</p>
                    <div className="white-space">
                        <p className="text-center">{`$${calculateTotalPrice()}`}</p>
                    </div>
                    <div className="button-container">
                        <button className="button cancel-button">
                            AGREGAR MAS ARTICULOS
                        </button>
                        <button
                            className="button cancel-button"
                            onClick={redirigirAotraPagina}
                        >
                            Metodos de Pago
                        </button>
                    </div>
                </div>
            </div>
            {Object.keys(products).map((item) => (
                <div key={item} className="slider-card">
                    <img
                        src={products[item].image}
                        width={50}
                        height={50}
                        alt={`Imagen de ${item}`}
                    />
                    <div className="slider-card-text">
                        <p>{products[item].title}</p>
                        <div className="white-space">
                            <p className="text-center">${products[item].price}</p>
                        </div>
                    </div>
                    <div className="cart-section">
                        <p className="add-text">Cantidad de Productos</p>
                        <div className="quantity-controls">
                            <button
                                onClick={() => decrementQuantity(item)}
                                className="btn-op"
                            >
                                {' '}
                                -{' '}
                            </button>
                            <span className="quantity">{products[item].quantity}</span>
                            <button
                                onClick={() => incrementQuantity(item)}
                                className="btn-op"
                            >
                                {' '}
                                +{' '}
                            </button>
                        </div>
                        <button onClick={() => eliminarProducto(item)} className="btn-op">
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CarritoV;
