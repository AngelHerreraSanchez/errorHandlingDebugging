class ValidationError extends Error{
    constructor(message){
        super(message)
        this.ValidationError = new ValidationError();
    }
}

function validateUsername(username) {
    if(username.length < 10){
        throw new ValidationError("The username is less than 10 characters")
    }
    else{
        return "Username is Valid";
    }
}


try{
    console.log(validateUsername("abc"));
}catch(error){
    console.error(`${error.name}: ${error.message}`)
}