"use client"
import { useRef } from "react";
import Swal from "sweetalert2";
import "../css/registrase.css"


function Registrarse() {
    const nameRef = useRef();
    const contrasenaRef = useRef();
    const correoRef = useRef();
    const formRef = useRef();
    const Apellido = useRef();
    const FechaNacimiento = useRef()



    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current); // Usa la referencia del formulario
        let URI = "http://127.0.0.1:3001/Usuarios";
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Nombre: formData.get("Nombre"),
                Apellido: formData.get("Apellido"),
                Correo: formData.get("Correo"),
                Contrasena: formData.get("Contrasena"),
                FechaNacimiento: formData.get("FechaNacimiento")
            }),
        };
        console.log(options.body);
        fetch(URI, options)
            .then((response) => response.json())
            .then((data) => {
                Swal.fire({
                    text: JSON.stringify("Bienvenido " + data.Nombre)
                }).then(() => {
                    window.location.href = "/Perfil";
                });
            });
    };

    const formatInput = () => {
        const input = FechaNacimiento.current;
        if (input.value.length === 2 || input.value.length === 5) {
            input.value += '/';
        }
    };



    return (
        <div className="page-container">
            <img
                src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3ODAwMThfbzA5ajc?session_id=c26aa6022aa8f34f4ac74623ada6ac959ceefb341bd0d719ba5588f1a4bbb3d8&inline=1&preview=1"
                alt="Imagen del producto"
                className="product-image"
            />
            <form className="form" ref={formRef} >
                <h3 className='welco'>Regístrate con nosotros</h3>
                <div className="wraptop">
                    <div className="top-label1">
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="Nombre"
                            ref={nameRef}
                            id="form3Example3"
                        />
                    </div>
                    <div className="top-label1">
                        <label>Apellido</label>
                        <input type="text" name="Apellido" ref={Apellido} />
                    </div>
                </div>
                <div className="top-label">
                    <label className='txt3'>Correo o Número de Teléfono</label>
                    <input type="text" name="Correo" ref={correoRef} />
                </div>
                <div className="top-label">
                    <label className='txt4'>Contraseña</label>
                    <input type="password" name="Contrasena" ref={contrasenaRef} />
                </div>
                <div className="top-label">
                    <label className='txt5'>Fecha de Nacimiento</label>
                    <input type="text"
                        name="FechaNacimiento"
                        placeholder="DD/MM/YYYY"
                        maxLength="10"
                        onChange={formatInput}
                        ref={FechaNacimiento} />
                </div>
                <div className="button-container">
                    <button id="registro-button" type="submit" onClick={handlerClick} >Registrarse</button>
                </div>
                <div className="button-container">
                    <button id="registro-button">Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default Registrarse