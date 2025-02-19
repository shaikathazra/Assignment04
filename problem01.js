/*function signature/sample */

function cashOut( money ) {

    if( typeof money === "number" && money >=0){

        return money*1.75/100 ;
    }
    else{
        return "Invalid";
    }

    }

