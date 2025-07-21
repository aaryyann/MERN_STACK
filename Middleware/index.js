const express = require('express')
const app = express()

// function that return a boolean if the age of person is greater than 14
// function isOldEnough(age) {
//     if(age >= 14) {
//         return true
//     }
//     else{
//         return false
//     }
// }

function isOldEnough(req ,res , next){
    const age = req.query.age
    if(age >= 14) {
        next()
    }else{
        res.json({
            msg: "Yeah !! You have got it "
        })
    }
}

app.get('/ride1' , isOldEnough , function(req , res){
        res.json({
            msg: 'you are ok for ride1'
        })
})

app.get('/ride2' , isOldEnough , function(req , res){
        res.json({
            msg: 'you are ok for ride2'
        })
})

app.listen(3000)