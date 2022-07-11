import "./components.css";

function NewCard({img, title, desc, className}) {
    return (
        <a className={`new-card text-dark text-decoration-none ${className}`}>
            <img src={img} alt="New image" />
            <div className='p-4'>
                <h6 className="fw-bold new-card__title">{title}</h6>
                <div className="new-card__desc" dangerouslySetInnerHTML={{__html: desc}}></div>
                <div className='text-center'>
                    <span className='btn btn-primary bg-primary border-0' href="">Leer mas</span>
                </div>
            </div>
        </a>
    );
}

export default NewCard;