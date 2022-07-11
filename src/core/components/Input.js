import { useState } from "react";
import InputValidator from "./InputValidator";
import {useDropzone} from 'react-dropzone';

function Input({ valRef, value, style, setImage, validation=new InputValidator(InputValidator.Validation.Text, "Campo vacio"), type="text", placeholder="", filter="", setValue=() => {}, className="", required=true}) {

    const validator = validation;
    const [feedback, setFeedback] = useState("");
    const [feedbackClassName, setFeedbackClassname] = useState("");
    
    const handleInputChange = ev => {
        let filteredVal = ev.currentTarget.value.replace(filter, "");
        setValue(filteredVal);  
        setFeedback("");
        setFeedbackClassname("");
        if (!validator.validate(filteredVal)) {
            setFeedback(validator.feedback);
            setFeedbackClassname("is-invalid");
        }
    }

    const [droppedImg, setDroppedImg] = useState();
    const onDrop = files => {
        files.map(file => {
            setImage({
                preview: URL.createObjectURL(file),
                file: file,
            });
            setDroppedImg(URL.createObjectURL(file));
        }
        );
    };
    const {getRootProps} = useDropzone({onDrop: onDrop});

    return (
        <div>
            {type === "img" ? 
            <div {...getRootProps({className: `dropzone ${className}`, style: style})}>
                {droppedImg ? 
                <img style={{objectFit: "cover"}} width="100%" height="100%" src={droppedImg} alt="" /> :
                <p className="m-0 p-2">{placeholder}</p>
                }
            </div>
            :
            <input
                required={required}
                style={style}
                className={`form-control ${feedbackClassName} ${className}`}
                value={value} 
                type={type} 
                placeholder={placeholder}
                ref={valRef}
                onChange={ev => handleInputChange(ev)} />
            }   
            {feedback &&
            <p className="text-danger">{feedback}</p>
            }
        </div>
    )
}

export default Input;