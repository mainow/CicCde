import { NavBar, NavBarBrand, NavBarContent, NavLink } from "../core/components/NavBar";

function Navbar({ active }) {
    
    const links = {
        "/": active == "/" ? "link__active" : "",
        "/educacion-online": active == "/educacion-online" ? "link__active" : "",
        "/nosotros": active == "/nosotros" ? "link__active" : "",
        "/noticas": active == "/noticias" ? "link__active" : "",
    };
    
    return (
        <NavBar fluid className="navbar-light d-flex justify-content-center">
            <NavBarBrand className="navbar-logo logo" url={"/"}>Colegio Inmaculada Concepcion CDE</NavBarBrand>
            <NavBarContent floatRight className="text-center">
                <NavLink className={`link ${links["/"]}`} to="/">Inicio</NavLink>
                <NavLink className={`link ${links["/educacion-online"]}`} to="/educacion-online">Educacion Online</NavLink>
                <NavLink className={`link ${links["/nosotros"]}`} to="/nosotros">Nosotros</NavLink>
                {/* <NavLink className={`link ${links["/noticias"]}`} to="/noticias">Noticias</NavLink> */}
            </NavBarContent>
        </NavBar>
    );
}

export default Navbar;