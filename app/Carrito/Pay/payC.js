"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';
import "../../css/Carrito.css"

function CarritoV() {
    const router = useRouter();
    const [quantities, setQuantities] = useState({
        item1: 1, item2: 1, item3: 1, item4: 1,
    });

    const incrementQuantity = (item) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item]: prevQuantities[item] + 1,
        }));
    };

    const decrementQuantity = (item) => {
        if (quantities[item] > 1) {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [item]: prevQuantities[item] - 1,
            }));
        }
    };

    const showSuccessAlert = () => {
        Swal.fire({
            title: 'Éxito',
            text: 'Pago realizado correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    }

    return (

        <div className="page-container">
            <div className="header">
                <p className='text1'>Categorías</p>
            </div>
            <div className="container">
                <div className="Img">
                    <div className="image-wrapper">
                    </div>
                    <p className="text-center" >Total a Pagar</p>
                    <div className="white-space">
                        <p className="text-center">$6206</p>
                    </div>
                    <p className="text-center" >Iniciar Compra</p>
                    <div className="button-container">
                        <button className="button cancel-button">AGREGAR MAS ARTICULOS</button>
                        <button className="button cancel-button" onClick={showSuccessAlert}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="slider-card">
                <img
                    src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc5NjhfVWtUcEg?session_id=0b2b02a3ebe29ae0379d5aa006b1964476fae68e4970c37b2ed79197e0978d1c&inline=1&preview=1"
                    width={50}
                    height={50}
                />
                <div className="slider-card-text">
                    <p>Procesador Intel Core i3-10100.</p>
                    <div className="white-space">
                        <p className="text-center">$3200</p>
                    </div>
                </div>
                <div className="cart-section">
                    <p className="add-text">Cantidad de Productos</p>
                    <div className="quantity-controls">
                        <button onClick={() => decrementQuantity('item1')} className="btn-op"> - </button>
                        <span className="quantity">{quantities['item1']}</span>
                        <button onClick={() => incrementQuantity('item1')} className="btn-op"> + </button>
                    </div>
                </div>
            </div>
            <div className="slider-card">
                <img
                    src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc4MjBfVzZ2SzI?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                    width={50}
                    height={50}
                />
                <div className="slider-card-text">
                    <p>Procesador Intel Core i3-10100.</p>
                    <div className="white-space">
                        <p className="text-center">$3200</p>
                    </div>
                </div>
                <div className="cart-section">
                    <p className="add-text">Cantidad de Productos</p>
                    <div className="quantity-controls">
                        <button onClick={() => decrementQuantity('item2')} className="btn-op"> - </button>
                        <span className="quantity">{quantities['item2']}</span>
                        <button onClick={() => incrementQuantity('item2')} className="btn-op"> + </button>
                    </div>
                </div>
            </div>
            <div className="slider-card">
                <img
                    src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc5NTFfS282Nk0?session_id=0b2b02a3ebe29ae0379d5aa006b1964476fae68e4970c37b2ed79197e0978d1c&inline=1&preview=1"
                    width={50}
                    height={50}
                />
                <div className="slider-card-text">
                    <p>Procesador Intel Core i3-10100.</p>
                    <div className="white-space">
                        <p className="text-center">$3200</p>
                    </div>
                </div>
                <div className="cart-section">
                    <p className="add-text">Cantidad de Productos</p>
                    <div className="quantity-controls">
                        <button onClick={() => decrementQuantity('item3')} className="btn-op"> - </button>
                        <span className="quantity">{quantities['item3']}</span>
                        <button onClick={() => incrementQuantity('item3')} className="btn-op"> + </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CarritoV;