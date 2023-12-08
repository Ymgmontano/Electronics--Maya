import Navbar from "../navbar/navbar";
import Armatuequipo from "./buildpc";
import Footer from "./footer";

function buildPc() {
    return (
        <>
        <Navbar></Navbar>
        <Armatuequipo></Armatuequipo>
        <Footer></Footer>
        </>
    );
}

export default buildPc;