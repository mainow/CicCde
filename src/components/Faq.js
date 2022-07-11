function Faq({ q, ans }) {
    return (
        <div className="faq p-2 text-start">
            <div className="d-flex align-items-center justify-content-between rounded-top rounded-right fw-bold faq-q px-3 py-2">
                <p className="p-0 m-0">{q}</p>
                <img src="assets/right-arrow.png" width="10px" height="10px"></img>
            </div>
            <p className="px-3 py-2 pt-0">{ans}</p>
        </div>
    );
}

export default Faq;