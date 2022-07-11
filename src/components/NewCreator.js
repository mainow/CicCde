import NewManager from '../components/util/NewManager';
import { Editor } from '@tinymce/tinymce-react';
import Modal from "react-bootstrap/Modal";
import Input from '../core/components/Input';
import Container from "../core/components/Container";
import { useRef, useState } from 'react';

function NewCreator({ open, setOpen, callback=()=>{} }) {
    
    const createNewInfo = {
        date: useRef(),
        title: useRef(),
        content: useRef()
    }

    const handleCreateNew = () => {
        NewManager.createNew(newImg.preview,
                            createNewInfo.date.current.value, 
                            createNewInfo.title.current.value, 
                            createNewInfo.content.current.getContent(),
                            (success) => callback(success));
    }

    const [newImg, setNewImg] = useState();
    
    return (
        <Modal show={open} size="xl"  onHide={() => setOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Crear noticia</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex gap-1">
                <Input type="img" setImage={setNewImg} style={{ height: "150px",  width: "250px" }} placeholder='Arrastre la imagen aqui, o click para seleccionar' className='d-flex align-items-center text-center'/>
                <Container className="d-flex flex-column gap-1" style={{ width: "100%" }}>
                    <Input valRef={createNewInfo.date} type='date' style={{ maxWidth: "200px" }}/>
                    <Input valRef={createNewInfo.title} placeholder='Titulo' />
                </Container>
            </Modal.Body>
            
            <Editor
                className="rounded-0"
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                onInit={(evt, editor) => createNewInfo.content.current = editor}
                init={{
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family: Poppins, sans-serif; }'
                }}
            />
            <Modal.Footer>
                <button className="btn btn-danger" onClick={() => setOpen(false)}>Cancelar</button>
                <button className="btn btn-success" onClick={handleCreateNew}>Crear Noticia</button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewCreator;