import AccessCard from "../components/AccessCard";
import Container from "../core/components/Container";
import Faq from "../components/Faq";
import { useSearchParams } from "react-router-dom";
import Redirect from "../core/components/Redirect";

function OnlineEducation() {
    const links = {
        "pc" : {
            "inicial": "https://ciccde.sharepoint.com/:x:/s/consultas/ETuCy3ZUe_xEqLsau60NutgBHeB9H8HockIOWvMjnjvqMw?e=zH2m5B",
            "primaria": "https://ciccde.sharepoint.com/:x:/s/consultas/EcNosjCefWpNgoPE9TzCvnEBZYjOIfclBnOArvVA0BOJxw?e=syzs01",
            "secundaria": "https://ciccde.sharepoint.com/:x:/s/consultas/EVf4g-f3n-hKoJbz38VbepsBHmyd-50qN5vEyY-gcMI_nQ?e=KofQbx"
        }, 
        "cel": {
            "inicial": "https://ciccde.sharepoint.com/:x:/s/consultas/EecKMXvCC_VKlucirF9aBQ8Bgr1ZzhaSHusfSObFnN7VrQ?e=3ZJqQL",
            "primaria": "https://ciccde.sharepoint.com/:x:/s/consultas/EcKYo4x6vQdPv2N4_A_JavQBmOVEKt4GyuQA34DSFwohLQ?e=heUtk9",
            "secundaria": "https://ciccde.sharepoint.com/:x:/s/consultas/Ec68zKwa6WhAhwouMRGOH6sBNAbGVpTCEyLepoXjFD7bpw?e=Wg4L0Z"
        }
    }
    
    const [searchParam, _] = useSearchParams();
    const course = searchParam.get("c");

    Redirect(course == "inicial-pc", links.pc.inicial)
    Redirect(course == "primaria-pc", links.pc.primaria)
    Redirect(course == "secundaria-pc", links.pc.secundaria)
    Redirect(course == "inicial-cel", links.cel.inicial)
    Redirect(course == "primaria-cel", links.cel.primaria)
    Redirect(course == "secundaria-cel", links.cel.secundaria)
    
    return (
        <div>
            <div className="container-fluid bg-primary">
                <div className="container">
                    <Container className="py-4 p-0 text-light" grid gridColumn="500px" gridBreakPoint={{maxWidth: "600px", columnWidth: "250px"}}>
                        <div>
                            <h3 className="fw-bold">El Colegio Inmaculada Concepción esta Online!</h3>
                            <p className="text-start">Contamos con las mejores herramientas de educacion online que existen. Facilitando el acceso a estudiantes a clases virtuales, tareas y actividades interactivas</p>
                        </div>
                        <Container className="bg-white br-1 p-3 rounded online-tools" style={{width: "100%"}} grid gridColumn="100px">
                            <img src="assets/microsoft-logo.svg" alt="Microsoft logo" />
                            <img src="assets/teams-icon.svg" alt="Microsoft logo" />
                            <img src="assets/excel-icon.svg" alt="Microsoft logo" />
                            <img src="assets/microsoft-sharepoint.svg" alt="Microsoft logo" />
                        </Container>
                    </Container>
                </div>
            </div>
            <div className="container my-5">
                <Container className="text-center text-sm-start container align-items-start gap-3" gridBreakPoint={{maxWidth: "450px", gridColumn: "200px"}} grid gridColumn="400px">
                    <div className="d-flex flex-column gap-5" style={{width: "100%"}}>
                        <div>
                            <h4 className="fw-bold">Acceso virtual a las notas</h4>
                            <Container className="gap-3" showFromBreakPoint={"768px"} grid gridColumn="160px" style={{ width: "100%" }}>
                                <AccessCard href={links.pc.inicial} info="Inicial" img="assets/access-card-bubble-1.png"/>
                                <AccessCard href={links.pc.primaria} info="Primaria" img="assets/access-card-bubble-2.png"/>
                                <AccessCard href={links.pc.secundaria} info="Secundaria" img="assets/access-card-bubble-3.png"/>
                            </Container>
                            <Container className="gap-3" hideOnBreakPoint={"768px"} grid gridColumn="160px" style={{ width: "100%" }}>
                                <AccessCard href={links.cel.inicial} info="Inicial" img="assets/access-card-bubble-1.png"/>
                                <AccessCard href={links.cel.primaria} info="Primaria" img="assets/access-card-bubble-2.png"/>
                                <AccessCard href={links.cel.secundaria} info="Secundaria" img="assets/access-card-bubble-3.png"/>
                            </Container>
                            
                        </div>
                        <div style={{ maxWidth: "400px" }}>
                            <h4 className="fw-bold">Registro Anecdotico</h4>
                            <Container grid gridColumn="160px">
                                <AccessCard href="http://www.google.com" info="Alumnos" img="assets/access-card-bubble-4.png"/>
                                <AccessCard href="http://www.google.com" info="Profesores" img="assets/access-card-bubble-2.png"/>
                            </Container>
                        </div>
                    </div>
                    <div className="">
                        <Faq q="Como se acceden a las notas?" ans="Acceder al link correspondiente al curso del alumno (Inicial, Primaria, Secundaria)" />  
                        <Faq q="Que es el registro anecdótico?" ans="Utilice su cuenta de Office 365 Institucional para acceder a los informes Docentes. Siga las indicaciones para cargar correctamente los registros anecdóticos" />  
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default OnlineEducation;