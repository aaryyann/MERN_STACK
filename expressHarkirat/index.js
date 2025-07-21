//creating a  HTTP server
//express

const express = require('express')
const app = express()

function sum(n){
    let ans = 0;
    for(let i = 0 ; i < n ; i++){
        ans = ans + i;
    }

    return ans;
}

app.get('/' , function(req , res){
    const n = req.query.n
    const ans = sum(n);
    res.send(ans.toString()); // express hamesha string return krta hai http server pr . hm kabhi number nhi pass kr sakte
})

app.listen(3000)



//Status Code 
/*
200 => Everything is Fine 
404 => Not found / Doctor is not present
500 => Mid surgery light went away
411 => Input were invalid
403 => you are not allowed to enter
*/
