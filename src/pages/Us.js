import Container from "../core/components/Container";

function UsFact({ title, desc, img, className="" }) {
    return (
        <Container className={`us-fact ${className}`}>
            <div>
                <div className="d-flex gap-2">
                    <img width="45px" height="45px" src={img} alt="" />
                    <h2 className="mt-1">{title}</h2>
                </div>
                <p className="mt-1">{desc}</p>
            </div>
        </Container>
    );
}

function Us({}) {
    return (
        <div>
            <Container className="container py-5 align-items-start" grid gridColumn="500px" gridBreakPoint={{ maxWidth: "500px", columnWidth: "200px"}}>
                <UsFact 
                    title="Filosofia"
                    desc="El Colegio Inmaculada Concepción asume la educación como un instrumento capaz de transformar la realidad, a partir de los niños y jóvenes, con la finalidad de despertar en ellos una nueva conciencia como sujetos de su historia, críticos, autónomos y actuantes en la historia de su pueblo iluminados por los valores evangélicos." 
                    img="assets/mision.png"
                    />
                <UsFact 
                    title="Mision"
                    desc="La mística del carisma de la congregación nos inserta en la realidad y nos impulsa a responder en favor de la vida, de la cultura de la paz y la solidaridad a través de la educación integral."
                    img="assets/filosofia.png"
                    />
                <UsFact
                    title="Vision"
                    desc="Se basa en la educación fundamentada en el evangelio de Jesús Cristo y el cuarto voto de la congregación, acogiendo a los niños y jóvenes más vulnerables de nuestra sociedad."
                    img="assets/vision.png"
                    />
            </Container>
            <div className="bg-primary py-3">
                <Container className="container text-light py-3 align-items-start gap-4" grid  gridColumn="500px" gridBreakPoint={{maxWidth: "500px", columnWidth: "200px"}}>
                    <UsFact 
                        title="Historia"
                        desc="El Colegio Inmaculada Concepción de Ciudad del Este es una institución educativa Católica dirigida por las Hermanas de la Congregación “Nuestra Señora de la Inmaculada Concepción, Hermanas Azules de Castres”. Las mismas llegaron a  Ciudad del Este en el año 1978 para ofrecer sus servicios. Abrieron el “Jardín de María”, lo que dio origen a lo que hoy es el Colegio Inmaculada Concepción. 
                        En el año 1986 abrieron una institución educativa formal bajo la advocación de la Inmaculada Concepción.
                        Actualmente cuenta con Educación Inicial, Educación Escolar Básica y Bachilleratos Técnicos y Científicos."
                        img="assets/historia.png"
                        />
                    <UsFact 
                        title="Principios"
                        desc="Asume al hombre que nace de la antropología cristiana, que considera al ser humano como persona creada a imagen y semejanza de Dios enriquecidos por el carisma y la espiritualidad de la Santa Emilie de Villeneuve"
                        img="assets/princiopio.png"
                        />
                </Container>
            </div>
        </div>
    );
}

export default Us;