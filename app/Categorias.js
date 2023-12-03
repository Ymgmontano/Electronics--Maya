
import './css/imgCenter.css';

const Imagenes = () => {
    return (
        <>
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
        </>
    );
};

export default Imagenes;