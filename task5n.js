let n=16

function checkPower(x){
    while(x){
        if(x===4){
            return true;
        }
        if(x%4===0){
            x /= 4;
        }else{
            return false;
        }
    }
}


console.log(checkPower(n))