/*function signature/sample */
function calculateWatchTime( times ) {
    
    let totalTime =0;
    for(let i of times){
        if( typeof i !=="number"){
            return "Invalid";
        }

        totalTime += i;
    }
        let hours = Math.floor(totalTime /3600);
        let minutes = Math.floor((totalTime % 3600)/60);
        let seconds = totalTime % 60;

        const result = {hour:hours, minute:minutes, second:seconds};

        return result;
     
    }
   

