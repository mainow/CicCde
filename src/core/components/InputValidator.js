class InputValidator {
    static Validation = {
        Ip: InputValidator.validIp, 
        Text: InputValidator.validText, 
        None: () => true
    }

    constructor(validation, feedback) {
        this.validation = validation;
        this.feedback = feedback;
    }

    validate(args) {
        return this.validation(args);
    }
    
    static validIp(ip) {
        const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
        return regexExp.test(ip);
    }
    
    static validText(text) {
        const regexExp = /./;
        return regexExp.test(text);
    }
}

export default InputValidator;