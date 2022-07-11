import { Link } from "react-router-dom";
import "./components.css";

function getChildren(childrenProp, childrenType) {
    if (Array.isArray(childrenProp)) return childrenProp.find(({ type }) => type === childrenType);
    else if (childrenProp.type === childrenType) return childrenProp;
    return null;
}

function NavBar({ children={}, fluid, className, style }) {
    const navbarContainer = fluid ? "container-fluid" : "container";
    return (
        <nav className={`navbar navbar-expand-lg ${className}`} style={style}>
            <div className={ navbarContainer }>
                { getChildren(children, NavBarBrand) }
                { getChildren(children, NavBarContent) }
            </div>
        </nav>
        
    );
}


function NavBarBrand({ className, url, children }) {
    return (
        <Link className={`navbar-brand ${className}`} to={ url }>{ children }</Link>
    )
}

function NavBarContent({ children, className, style, floatRight }) {
    const classNameVal = floatRight ? "ms-auto" : "";
    return (
        <>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${className}`} style={style} id="navbarLinks">
            <div className={`${classNameVal} navbar-nav`}>
                { children }
            </div>
        </div>
        </>
    );
}

function NavLink({ className, to, href, children }) {
    return (
        <>
            {to ? 
            <Link className={`nav-link navbar-link mx-auto mx-md-3 my-3 text-dark ${className}`} to={to}>{children}</Link> : 
            <a className={`nav-link ${className}`} href={href}>{children}</a>}
        </>
    );
    //! Me cog
}

export { NavBar, NavBarBrand,  NavBarContent, NavLink }; 