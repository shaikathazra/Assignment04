/*function signature/sample */
function validEmail( email ) {

    if (typeof email == "string") {

        if(/^[.\-_+@]/.test(email) || /\s/.test(email)|| !/@/.test(email) || !email.endsWith(".com")){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return "Invalid"
    }

    }

    