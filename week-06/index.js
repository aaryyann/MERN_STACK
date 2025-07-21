const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "randomHarkiratIloveKiara"
const app = express()

app.use(express.json())

const users = []

// function generateToken(){
//     let rand = function() {
//         return Math.random().toString(36).substr(2); // remove `0.`
//     };
    
//     let token = function() {
//         return rand() + rand() + rand() + "-" + rand() + rand() + rand(); // to make it longer
//     };

//     return token();
// }

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})


app.post('/sign-in' , function(req , res){
    const username = req.body.username
    const password = req.body.password

    const user = users.find(function(u){
        if(u.username === username && u.password === password){
            return true;
        }
        else{
            return false;
        }
    })

    if(user){
        const token = jwt.sign({
            username : username,
        }, JWT_SECRET)

        // user.token = token;

        res.send({
            msg : token
        })
    }else{
        res.send({
            msg: "Invalid username or password"
        })
    }

})

app.post('/sign-up' , function(req, res){
    const username = req.body.username
    const password = req.body.password


    users.push({
        username: username,
        password: password
    })

    res.json({
        msg : "Congrats , you are now part of community"
    }) 
})

function auth(req , res, next){
    const token = req.headers.token
 
    const decodedInformation = jwt.verify(token , JWT_SECRET) // {username : username}
    const username = decodedInformation.username

    if(username){
        req.username = username;
        next()
    }else{
        res.json({
            msg : "You are not logged in"
        })
    }

}

app.get('/me' , auth , function(req ,res){

    let foundUser = null

    for (let i = 0 ; i < users.length ; i++){
        if(users[i].username == req.username){
            foundUser = users[i]
        }
    }

    if(foundUser){
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
    } else{
        res.json({
            msg: "No user found"
        })
    }
})

app.listen(3000)