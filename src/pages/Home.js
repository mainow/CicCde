import Container from "../core/components/Container";
import { Link } from "react-router-dom";
import AcademicProposal from "../components/AcademicProposal";

function Home() {

    const aboutInfoWidth = "180px";

    const AboutInfo = ({img, size, desc, link="/"}) => {
        return (
            <Link to={link} className="no-link">
                <Container className="about-info" circle width={size} height={size} border="1px dashed gray" pad={"100px"} flexCenter>
                    <img src={img} style={{ borderRadius: "50%", objectFit: "cover" }} height={size} width={size} alt="" />
                </Container>
                <h3 className="pt-3 f-italic text-dark about-info-desc">{desc}</h3>
            </Link>
        )
    }
        
    return (
        <>
            <iframe width="100%" height="500vh" src="https://www.youtube.com/embed/wj6lvxpInu0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <section className="text-center">
                <div className="container">
                    <h2 className="fw-bold">El Colegio Inmaculada Concepción es tu lugar para</h2>
                    <p>Educar a los niños y jóvenes inspirado por la mística del carisma y espiritualidad de Santa Emilie de Villeneuve es nuestra misión</p>
                    <Container grid gridColumn="260px" className="py-5 gap-4">
                        <AboutInfo link="/" img="assets/abanderados.jpg" size={aboutInfoWidth} desc="Filosofia" />
                        <AboutInfo link="/" img="assets/campamento.jpg" size={aboutInfoWidth} desc="Historia" />
                        <AboutInfo link="/" img="assets/profes.jpg" size={aboutInfoWidth} desc="Mision" />
                        <AboutInfo link="/" img="assets/parque.jpg" size={"250px"} desc="Vision" />
                    </Container>
                </div>
            </section>
            <section>
                <div className="text-center container">
                    <h4 className="fw-bold py-3">Propuestas academicas</h4>
                    <Container grid>
                        <AcademicProposal name="BTI" desc="Bachillerato Técnico en Informática" img="assets/coding.png" />
                        <AcademicProposal name="BTA" desc="Bachillerato Técnico en Administración" img="assets/calculator.png" />
                        <AcademicProposal name="BTS" desc="Bachillerato Técnico en Salud" img="assets/phonendoscope.png" />
                        <AcademicProposal name="BC" desc="Bachillerato Cientifico" img="assets/dna.png" />
                        <AcademicProposal name="2do Ciclo" desc="4° 5° 6°" img="assets/geography.png" />
                        <AcademicProposal name="1er Ciclo" desc="1° 2° 3°" img="assets/paint-brush.png" />
                        <AcademicProposal name="Inicial" desc="Jardín I Jardín II Preescolar" img="assets/open-book.png" />
                    </Container>
                </div>
            </section>
            <section>
                <div className="text-center">
                    <h4 className="fw-bold py-3">Información Relevante</h4>
                    <div className="d-flex contact container">
                        <div className="contact-links">
                            <a href="https://wa.me/+595961935646?text=Hola, quisiera comunicarme con el colegio" className="no-link">
                                <img src="assets/whatsapp.png" alt="" />
                                <p>+595 961 935 646</p>
                            </a>
                            <a href="mailto:ciccdeleste@yahoo.com.ar" className="no-link">
                                <img src="assets/gmail.png" alt="" />
                                <p>ciccdeleste@yahoo.com.ar</p>
                            </a>
                            <a href="tel:+595987129213" className="no-link">
                                <img src="assets/phone-call.png" alt="" />
                                <p>+595 061 500 875</p>
                            </a>
                        </div>
                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.5567755770967!2d-54.6176817854161!3d-25.519824383747107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68ffb8596108d%3A0x52e1f45c5b57ed00!2sImmaculate%20Conception%20School!5e0!3m2!1sen!2spy!4v1629556012884!5m2!1sen!2spy" 
                            width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;