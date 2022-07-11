import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, active }) {
    return (
        <>
            <Navbar active={active}/>
                <main>
                    { children } 
                </main>
            <Footer />
        </>
    );
}

export default Layout;