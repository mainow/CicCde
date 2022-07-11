function Select({ valRef, value, placeholder="", invalidFeedbackMsg="invalido", setValue=() => {}, className="" }) {
    return (
        <div>
            <select
            className={className}
            value={value} 
            className={`form-control ${feedbackClassName}`}
            type={type} 
            placeholder={placeholder}
            ref={valRef}
            onChange={ev => handleInputChange(ev)} />
            <p className="text-danger">{ invalidFeedbackMsg }</p>
        </div>
    );
}

export default Select;