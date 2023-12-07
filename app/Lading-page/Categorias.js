"use client"
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Swal from 'sweetalert2';
import '../css/imgCenter.css';

const Imagenes = () => {
    useEffect(() => {
        const socket = io('http://localhost:4000');

        // Maneja el evento 'error' en la conexión del socket
        socket.on('connect_error', (error) => {
            console.error('Error de conexión al servidor:', error.message);

            // Muestra una alerta de error en la esquina superior derecha con el mensaje de error
            Swal.fire({
                icon: 'error',
                title: 'Error de conexión',
                text: `No se pudo conectar al servidor: ${error.message}`,
                position: 'top-end',
                timer: 3000,
                width: '240px',
                showConfirmButton: false,
            });
        });

        // Maneja la notificación cuando el cliente se conecta al servidor
        socket.on('conexionExitosa', (mensaje) => {
            console.log('Notificación de conexión exitosa:', mensaje);

            // Muestra la alerta en la esquina derecha con un temporizador de 4 segundos
            Swal.fire({
                icon: 'info',
                title: 'Nuevo Usuario 🎉',
                text: mensaje,
                position: 'top-end',
                timer: 3000,
                width: '240px',
                showConfirmButton: false,
            });
        });

        // Maneja la desconexión del cliente
        return () => {
            socket.disconnect();
        };
    }, []);

    return (

        <div className="page-container">
            <div className="header">
                <p className='text1'>Categorías</p>
            </div>
            <div className="img-container">
                <div className="Img">
                    <div className="image-wrapper">
                        <a href="/Build-pc">
                            <img
                                src='https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3NjUyNTlfWEpMVno?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1'
                                style={{ width: '200px', height: '200px', margin: '0 auto' }}
                            />
                        </a>
                    </div>
                    <p className="text-center" >Venta de Componentes</p>
                </div>
                <div className="Img2">
                    <div className="image-wrapper">
                        <a href="/ventas">
                            <img
                                src='https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3NjUyNTlfWEpMVno?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1'
                                style={{ width: '200px', height: '200px', margin: '0 auto' }}
                            />
                        </a>
                    </div>
                    <p className="text-center" >Arma tu Equipo</p>
                </div>
            </div>
        </div>

    );
};

export default Imagenes;