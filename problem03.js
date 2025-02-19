/*function signature/sample */
function electionResult( votes ) {
    
    if (!Array.isArray(votes)) {
        return "Invalid"; 
    }

    let margoVote=0 , bananaVote=0 ;

    for (let i of votes){
        if(i ==="mango"){
            margoVote++;
        }
        else if(i === "banana"){
            bananaVote++;
        }
        
    }

    if (margoVote>bananaVote){
        return "Mango";
    }
    else if (margoVote <bananaVote){
        return "Banana";
    }
    else{
        return "Draw";
    }

    }


