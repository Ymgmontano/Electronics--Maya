"use client"
import { useRouter } from 'next/navigation'
import { useRef } from "react";
import Swal from 'sweetalert2';
import "../css/pagos.css"

function Pago() {
    const router = useRouter();
    const Nombre = useRef();
    const Correo = useRef();
    const Telefono = useRef();
    const Pais = useRef();
    const Municipio = useRef();
    const CP = useRef();
    const Direccion = useRef();
    const formRef = useRef();

    const handlerClick = (e) => {
        e.preventDefault();
        const nombre = document.querySelector('input[placeholder="Nombre y Apellido"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const telefono = document.querySelector('input[placeholder="Telefono"]').value;
        const paisRegion = document.querySelector('input[placeholder="País/Región"]').value;
        const municipio = document.querySelector('input[placeholder="Municipio"]').value;
        const codigoPostal = document.querySelector('input[placeholder="Código Postal"]').value;
        const calleNumero = document.querySelector('input[placeholder="Calle y Número exterior"]').value;

        const formData = new FormData(formRef.current); // Usa la referencia del formulario
        let URI = "http://54.80.112.93:3001/Ventas";
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Nombre: formData.get("Nombre"),
                Correo: formData.get("Correo"),
                Telefono: formData.get("Telefono"),
                Pais: formData.get("Pais"),
                Municipio: formData.get("Municipio"),
                CP: formData.get("CP"),
                Direccion: formData.get("Direccion"),
            }),
        };
        console.log(options.body);
        fetch(URI, options)
            .then((response) => response.json())




        if (nombre && email && telefono && paisRegion && municipio && codigoPostal && calleNumero) {
            Swal.fire({
                title: '¡Éxito!',
                text: 'Datos guardados correctamente',
                icon: 'success',
                timer: 3000,
                showConfirmButton: false,
                timerProgressBar: true,
                didClose: () => {
                    router.push('/Carrito/Pay');
                }
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos para continuar.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <>
            <div className="header">
                <p className='text1'>Categorías</p>
            </div>
            <form ref={formRef} onSubmit={handlerClick}>
                <div className="container">
                    <div className="section">
                        <h2>Detalles de facturación:</h2>
                        <input type="text" placeholder="Nombre y Apellido" required name="Nombre" ref={Nombre} />
                        <input type="email" placeholder="Email" name="Correo" required ref={Correo} />
                        <input type="tel" placeholder="Telefono" name="Telefono" required ref={Telefono} />
                        <div className="metodo-pago">
                            <label htmlFor="pago">Método de pago</label> {/* Label moved above the image */}
                            <img src="https://www.paypalobjects.com/marketing/web/us/en/business/smb/shared/icons/paypal-accept-payments.png" alt="PayPal" />
                        </div>
                    </div>
                    <div className="section">
                        <h2>Dirección:</h2>
                        <input type="text" placeholder="País/Región" name="Pais" ref={Pais} required />
                        <input type="text" placeholder="Municipio" name="Municipio" ref={Municipio} required />
                        <input type="text" placeholder="Código Postal" name="CP" required ref={CP} />
                        <input type="text" placeholder="Calle y Número exterior" name="Direccion" ref={Direccion} required />
                        <button className="button" type='submit'>REALIZAR COMPRA</button>
                    </div>
                </div>
            </form>

        </>
    );
}

export default Pago;