function setTimeoutProsified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
}

function callBack(){
    console.log("# second passed")
}

setTimeoutProsified(2000).then(callBack);