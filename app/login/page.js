"use client"
import React, { useRef } from 'react';
import '../css/Login.css';
import Link from 'next/link';
import Swal from 'sweetalert2';

//HELLOMYFRIENDS

function Login() {
    const form = useRef();


    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const Correo = formData.get('Correo');
        const Contrasena = formData.get('Contrasena');

        if (!Correo || !Contrasena) {
            Swal.fire({
                icon: 'question',
                text: 'Rellena todos los campos',
            });
        } else {
            fetch(`http://127.0.0.1:3001/usuarios/${Correo}/${Contrasena}`)
                .then(response => response.json())
                .then(data => {
                    if (data.message === 'Contraseña incorrecta') {
                        Swal.fire({
                            icon: 'error',
                            text: 'La Contraseña es incorrecta',
                        });
                    } else if (data.message === "Nombre de usuario incorrecto") {
                        Swal.fire({
                            icon: 'error',
                            text: 'El Nombre de usuario es incorrecto',
                        });
                    } else if (data.message === 'Has iniciado sesión') {
                        Swal.fire({
                            icon: 'success',
                            text: `Bienvenido ${Correo}`,
                            timer: 3000,
                            showConfirmButton: false,
                        }).then(() => {
                            // Redirigir a la vista del perfil
                            window.location.href = "/Perfil";
                        });
                    }
                })
                .catch(error => {
                    console.error('Error al iniciar sesión:', error.message);
                    Swal.fire({
                        icon: 'error',
                        text: 'Error al iniciar sesión. Inténtalo de nuevo.',
                    });
                });
        }
    };




    return (
        <div className="page-container">
            <img
                src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3ODAwMThfbzA5ajc?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                alt="Imagen del producto"
                className="product-image"
            />
            <form className="form" ref={form} >
                <h3 className="welco">Iniciar Sesión</h3>
                <div>
                    <label className="txt1">
                        <h3 className="contra">Correo o Numero de Telefono</h3>
                        <input
                            type="text"
                            name="Correo"
                            className="contras"
                            id="usuario"
                        />
                    </label>
                </div>
                <div>
                    <label className="txt2">
                        <h3 className="name">Contraseña</h3>
                        <input
                            type="password"
                            name="Contrasena"
                            className="con"
                            id="contrasena"
                        />
                    </label>
                </div>
                <div className="Confi2">
                    <h3 className="op">Olvidaste tu contraseña</h3>
                </div>
                <div className="button-container">
                    <button
                        type="button"
                        id="inicio-sesion-button"
                        onClick={handlerClick}
                    >
                        Inicio de Sesión
                    </button>
                    <Link href="/Registrase">
                        <button id="registro-button">Registrarse</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;