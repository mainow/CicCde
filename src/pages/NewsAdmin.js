import { useEffect, useState } from 'react';
import NewManager from '../components/util/NewManager';
import NewsTable from '../components/NewsTable';
import NewTableRow from '../components/NewTableRow';
import NewCreator from "../components/NewCreator";
import Toast from 'react-bootstrap/Toast'
import Spinner from 'react-bootstrap/Spinner';

function NewsAdmin() {

    const [news, setNews] = useState(false);
    useEffect(() => NewManager.getNews(setNews), []);
    
    const handleDeleteNew = (id) => {
        NewManager.deleteNew(id, ()=> NewManager.getNews(setNews));
    }

    const handleCreateNew = success => {
        setCreateNewAttempt(true);
        setSuccessCreateNew(success);
        setCreateFormOpen(!success);
        NewManager.getNews(setNews);
    }

    const [createFormOpen, setCreateFormOpen] = useState(false);
    const [createNewAttempt, setCreateNewAttempt] = useState(false);
    const [successCreateNew, setSuccessCreateNew] = useState(false);
    
    return (
        <div className='container'>
            <div className='d-flex justify-content-between pb-1'>
                <h2>Noticias</h2> 
                <div style={{zIndex: "10000", position: "absolute", right: "20px", top: "20px"}}>
                    <Toast show={createNewAttempt} delay={4000} autohide bg={successCreateNew ? "success" : "danger"} onClose={() => setCreateNewAttempt(false)}>
                        <Toast.Header>
                            <strong className="me-auto">Crear Noticia</strong>
                        </Toast.Header>
                        { successCreateNew ? 
                            <Toast.Body>Noticia creada exitosamente</Toast.Body> :
                            <Toast.Body>La noticia no pudo ser creada, revise sus datos e intentelo de nuevo</Toast.Body>
                        }
                    </Toast>
                </div>
                <button onClick={() => setCreateFormOpen(true)} className='btn bg-primary text-light'>+</button>
                <NewCreator open={createFormOpen} setOpen={setCreateFormOpen} callback={handleCreateNew} />

                
            </div>
            {!news ? 
                <Spinner animation="border" /> :
                <NewsTable news={[news.map(n => <NewTableRow key={n[0]} onDeleteNew={() => handleDeleteNew(n[0])} date={n.date} title={n.title} content={n.content} />)]} />
            }

        </div>
    );
}

export default NewsAdmin;