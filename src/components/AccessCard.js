function AccessCard({ info, img, href }) {
    return (
        <div className="access-card shadow-sm rounded p-3 text-center">
            <a href={href} className="no-link">
                <div className="d-flex justify-content-center gap-2">
                    <p className="m-0">{info}</p>
                    <img src="assets/go link.png" width="18px" height="18px" alt="" />
                </div>
                <img src={img} className="access-card-img" />
            </a>
        </div>
    );
}

export default AccessCard;