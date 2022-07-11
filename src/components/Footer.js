import Container from "../core/components/Container";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="shadow container-fluid p-5">
            <div className="container footer d-flex">
                <div className="footer-brand d-flex flex-column justify-content-center align-items-center">
                    <Link to="/" className="logo no-link">CicCde</Link>
                    <div className="d-flex gap-2">
                        <a href="https://wa.me/+595961935646">
                            <img width="20px" src="assets/whatsapp.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/inmaculada.concepcion.73744">
                            <img width="20px" src="assets/facebook.png" alt="" />
                        </a>
                    </div>
                </div>
                <Container className="footer-links text-center" grid gap="0" align="center" gridSize="200px">
                    <div className="d-flex flex-column">
                        <Link className={`no-link text-dark m-0`} to="/">Inicio</Link>
                        <Link className={`no-link text-dark`} to="/nosotros">Nosotros</Link>
                    </div>
                    <div className="d-flex flex-column">
                        <Link className={`no-link text-dark`} to="/educacion-online">Educacion Online</Link>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;