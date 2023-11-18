"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "../css/armatuequipo.css";


function Armatuequipo() {
    const [quantities, setQuantities] = useState({
        item1: 1, item2: 1, item3: 1, item4: 1,
        item5: 1, item6: 1, item7: 1, item8: 1,
        item9: 1, item10: 1, item11: 1, item12: 1,
        item13: 1, item14: 1, item15: 1, item16: 1,
        item17: 1, item18: 1, item19: 1, item20: 1,
        item21: 1, item22: 1, item23: 1,
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
    const handleCancel = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Se borró la selección',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'my-custom-alert', // Aplica tu clase personalizada aquí
            }
        });
    }

    const redirigirAotraPagina = () => {

        router.push('/Perfil');
    };

    return (
        <>
            <div className="page-container">
                <div className="header">
                    <p className='text1'>Arma Tu Equipo</p>
                </div>
                <p className="text-top">Gabinete</p>
                <div className="slider-card">
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTkxMjdfNzZud3A?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 1" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item1')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item1']}</span>
                            <button onClick={() => incrementQuantity('item1')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTcwMDlfOUw5WDI?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 2" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item2')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item2']}</span>
                            <button onClick={() => incrementQuantity('item2')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTcwMjNfbWE2NVA?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 3" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item3')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item3']}</span>
                            <button onClick={() => incrementQuantity('item3')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTcwMTNfcnBxNkQ?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 4" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item4')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item4']}</span>
                            <button onClick={() => incrementQuantity('item4')} className="btn-op"> + </button>
                        </div>
                    </div>
                </div>
                <p className="text-top" >PLACA MADRE</p>
                <div className="slider-card">
                    <div className="image-container">
                        <img src="https://www.opendrive.com/s/MjdfMjA3Nzc4NDBfQkN0NE0?preview=1&folder_id=MjdfMTQ0NTU0MF8yc2Nieg" alt="Slide 1" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item5')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item5']}</span>
                            <button onClick={() => incrementQuantity('item5')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQVROalGTVoRNpFWj42fXRisuYb4ah41l0FXenEnH6qWZQPFjGJ7-amxFSrP-vTIReD1iOLVlYfevRRxcYZU1wFVqXKFw5r0L5Eu0waRriVWOl4LqfF70FWGVgUV78bC3SlF_cDQ1XiTA&usqp=CAc" alt="Slide 2" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item6')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item6']}</span>
                            <button onClick={() => incrementQuantity('item6')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc4OTJfZVJNQTc?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 3" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item7')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item7']}</span>
                            <button onClick={() => incrementQuantity('item7')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://www.opendrive.com/s/MjdfMjE0NTcwMjlfcTRrUXU?preview=1&folder_id=MjdfMTQ0NTU0MF8yc2Nieg" alt="Slide 4" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item8')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item8']}</span>
                            <button onClick={() => incrementQuantity('item8')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc4NDBfQkN0NE0?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 3" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item9')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item9']}</span>
                            <button onClick={() => incrementQuantity('item9')} className="btn-op"> + </button>
                        </div>
                    </div>
                </div>
                <p className="text-top" >MEMORIA RAM</p>
                <div className="slider-card">
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTcwMjhfZFZBZUI?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 1" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item10')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item10']}</span>
                            <button onClick={() => incrementQuantity('item10')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTcwMzJfT25UNFo?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 2" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item11')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item11']}</span>
                            <button onClick={() => incrementQuantity('item11')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTcwMzBfdEJsT1c?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 3" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item12')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item12']}</span>
                            <button onClick={() => incrementQuantity('item12')} className="btn-op"> + </button>
                        </div>
                    </div>
                </div>
                <p className="text-top" >PROCESADORES</p>
                <div className="slider-card">
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTY5NzlfbXNxWkM?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 1" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item13')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item13']}</span>
                            <button onClick={() => incrementQuantity('item13')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://www.opendrive.com/s/MjdfMjA3Nzc5MjVfbzJBTkU?preview=1&folder_id=MjdfMTQ0NTU0MF8yc2Nieg" alt="Slide 2" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item14')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item14']}</span>
                            <button onClick={() => incrementQuantity('item14')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc5NTFfS282Nk0?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 3" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item15')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item15']}</span>
                            <button onClick={() => incrementQuantity('item15')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc5ODhfQUJJZ1c?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 4" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item16')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item16']}</span>
                            <button onClick={() => incrementQuantity('item16')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjA3Nzc5NjhfVWtUcEg?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 4" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item17')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item17']}</span>
                            <button onClick={() => incrementQuantity('item17')} className="btn-op"> + </button>
                        </div>
                    </div>
                </div>
                <p className="text-top" >DISCO DUROS</p>
                <div className="slider-card">
                    <div className="image-container">
                        <img src="https://www.opendrive.com/s/MjdfMjE0NTcwMTdfVzNxY1c?preview=1&folder_id=MjdfMTQ0NTU0MF8yc2Nieg" alt="Slide 1" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item18')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item18']}</span>
                            <button onClick={() => incrementQuantity('item18')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTcwMDdfcUNOYXE?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 2" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item19')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item19']}</span>
                            <button onClick={() => incrementQuantity('item19')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTY5OTVfUERSNW0?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 3" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item20')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item20']}</span>
                            <button onClick={() => incrementQuantity('item20')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTcwMTBfS3BFaFc?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 4" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item21')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item21']}</span>
                            <button onClick={() => incrementQuantity('item21')} className="btn-op"> + </button>
                        </div>
                    </div>
                </div>
                <p className="text-top" >Ventiladores</p>
                <div className="slider-card1">
                    <div className="image-container">
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjE0NTcwMjZfdmJhUkc?session_id=81d1a1888fb104b78443cfd091125995adb67649445f8570a381f21e9308a2fd&inline=1&preview=1" alt="Slide 1" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item22')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item22']}</span>
                            <button onClick={() => incrementQuantity('item22')} className="btn-op"> + </button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSSUYYkIoQLG6t1JlKKcUWu_Ah388Sy2agSmouwDAtGCmP-dzaJASw4cKiHEEPRPkZpBc94rO9FyNaE5vXKuV4HI-Rm8DjOHFJlKr0LFSZua2D9lBA65BKURrDAfQ&usqp=CAc" alt="Slide 2" className="slide-image" />
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity('item23')} className="btn-op"> - </button>
                            <span className="quantity">{quantities['item23']}</span>
                            <button onClick={() => incrementQuantity('item23')} className="btn-op"> + </button>
                        </div>
                    </div>
                </div>
                <div className="button-end">
                    <button className="button-right-button" onClick={redirigirAotraPagina}>Métodos de Pago</button>
                    <button className="button-right-button" onClick={handleCancel} >Cancelar</button>
                </div>
            </div>

        </>
    );
}

export default Armatuequipo;