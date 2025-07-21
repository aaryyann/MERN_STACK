const express = require('express')
const app = express()

const users = [{
    name: 'John',
    kidneys : [{
        healthy : false
    }]
}];

app.get('/' , function(req , res){
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnKidneys.length;

    let numberOFHealthyKidneys = 0;

    for(let i = 0 ; i < numberofKidneys ; i++){
        if(johnKidneys[i].healthy){
            numberOFHealthyKidneys += 1;
        }
    }

    const numberofUnhealthyKidneys = numberofKidneys - numberOFHealthyKidneys;

    res.json({
        numberOFHealthyKidneys,
        numberofKidneys,
        numberofUnhealthyKidneys
        
    })
})

app.post('/' , function(req , res){
    const isHealty = req.body.isHealty
})

// app.put('/' , function(req , res){

// })

// app.delete('/' , function(req , res){

// })

app.listen(3000)