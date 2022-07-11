import "./components.css";

function AcademicProposal({ name, desc, img, imgSize="70px" }) {
    return (
        <div className="academic-proposal d-flex justify-content-between">
            <div className="text-start">
                <h4 className="fw-bold m-0">{name}</h4>
                <p>{desc}</p>
            </div>
            <div className="d-flex align-items-center">
                <img src={img} alt="" width={imgSize} height={imgSize} />
            </div>
        </div>
    );
}

export default AcademicProposal;