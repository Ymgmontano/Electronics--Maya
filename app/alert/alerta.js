"use client"
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Swal from 'sweetalert2';

const Alert = () => {
    const [notificaciones, setNotificaciones] = useState([]);

    useEffect(() => {
        const socket = io('http://localhost:4000');
        socket.on('notificacion', (mensaje) => {
            console.log('Notificación recibida en el cliente:', mensaje);

            Swal.fire({
                icon: 'info',
                title: 'Nueva notificación',
                text: mensaje,
                position: 'top', 
            });
        });
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <>
        </>
    );
};

export default Alert;
