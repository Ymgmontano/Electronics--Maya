"use client"
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../css/EstilosVenta.css'
import '../css/EstilosCards.css'


const Ventas = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
        // Agrega la clase modal-open a las tarjetas cuando se muestra el modal
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('modal-open');
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        // Quita la clase modal-open de las tarjetas cuando se cierra el modal
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('modal-open');
        });
    };
    return (
        <div>
            <div className="container">
                <h1>ARMA TU EQUIPO</h1>
            </div>

            <div className="container2">
                <h1 className="txt-PlacaMadre">PLACA MADRE</h1>
            </div>


            <div className="card-container">
                <div className="card">
                    <div className="price-and-favorite">
                        <div className="price">$99.99</div>
                        <span className="favorite-icon">❤</span>
                    </div>
                    <div className="zoom-container" >
                        <img
                            src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc5MDBfQTBQb0w?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                            alt="Imagen del producto"
                            className="product-image"
                        />
                    </div>
                    <div className="text-section">
                        <h2 className="title">GIGABYTE B550M DS3H-Motherboard/Placa Base</h2>
                    </div>
                    <button onClick={handleShowModal}>Agregar</button>
                    <button className="add-to-cart">Agregar</button>
                </div>
                <div className="card">
                    <div className="price-and-favorite">
                        <div className="price">$99.99</div>
                        <span className="favorite-icon">❤</span>
                    </div>
                    <img
                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc4OTJfZVJNQTc?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                        alt="Imagen del producto"
                        className="product-image"
                    />
                    <div className="text-section">
                        <h2 className="title">GIGABYTE B550M DS3H-Motherboard/Placa Base</h2>
                    </div>
                    <button className="add-to-cart">Agregar</button>
                </div>

                <div className="card">
                    <div className="price-and-favorite">
                        <div className="price">$99.99</div>
                        <span className="favorite-icon">❤</span>
                    </div>
                    <img
                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc4MjBfVzZ2SzI?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                        alt="Imagen del producto"
                        className="product-image"
                    />
                    <div className="text-section">
                        <h2 className="title">GIGABYTE B550M DS3H-Motherboard/Placa Base</h2>
                    </div>
                    <button className="add-to-cart">Agregar</button>
                </div>

                <div className="card">
                    <div className="price-and-favorite">
                        <div className="price">$99.99</div>
                        <span className="favorite-icon">❤</span>
                    </div>
                    <img
                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc4NDBfQkN0NE0?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                        alt="Imagen del producto"
                        className="product-image"
                    />
                    <div className="text-section">
                        <h2 className="title">GIGABYTE B550M DS3H-Motherboard/Placa Base</h2>
                    </div>
                    <button className="add-to-cart">Agregar</button>
                </div>
            </div>




            <div className="container2">
                <h1 className="txt-PlacaMadre">PROCESADORES</h1>
            </div>


            <div className="card-container">


                <div className="card">
                    <div className="price-and-favorite">
                        <div className="price">$99.99</div>
                        <span className="favorite-icon">❤</span>
                    </div>
                    <img
                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc5MjVfbzJBTkU?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                        alt="Imagen del producto"
                        className="product-image"
                    />
                    <div className="text-section">
                        <h2 className="title">GIGABYTE B550M DS3H-Motherboard/Placa Base</h2>
                    </div>
                    <button className="add-to-cart">Agregar</button>
                </div>

                <div className="card">
                    <div className="price-and-favorite">
                        <div className="price">$99.99</div>
                        <span className="favorite-icon">❤</span>
                    </div>
                    <img
                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc5NTFfS282Nk0?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                        alt="Imagen del producto"
                        className="product-image"
                    />
                    <div className="text-section">
                        <h2 className="title">GIGABYTE B550M DS3H-Motherboard/Placa Base</h2>
                    </div>
                    <button className="add-to-cart">Agregar</button>
                </div>

                <div className="card">
                    <div className="price-and-favorite">
                        <div className="price">$99.99</div>
                        <span className="favorite-icon">❤</span>
                    </div>
                    <img
                        src="https://www.opendrive.com/s/MjdfMjA3Nzc5NjhfVWtUcEg?preview=1&folder_id=MjdfMTQ0NTU0MF8yc2Nieg"
                        alt="Imagen del producto"
                        className="product-image"
                    />
                    <div className="text-section">
                        <h2 className="title">GIGABYTE B550M DS3H-Motherboard/Placa Base</h2>
                    </div>
                    <button className="add-to-cart">Agregar</button>
                </div>

                <div className="card">
                    <div className="price-and-favorite">
                        <div className="price">$99.99</div>
                        <span className="favorite-icon">❤</span>
                    </div>
                    <img
                        src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc5ODhfQUJJZ1c?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                        alt="Imagen del producto"
                        className="product-image"
                    />
                    <div className="text-section">
                        <h2 className="title">GIGABYTE B550M DS3H-Motherboard/Placa Base</h2>
                    </div>
                    <button className="add-to-cart">Agregar</button>
                </div>
            </div>
        </div>
    );
};
export default Ventas;