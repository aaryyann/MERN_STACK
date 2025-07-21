const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/add' , function (req, res){
    // const a = parseInt(req.body.a)
    // const b = parseInt(req.body.b)

    // res.json({
    //     ans:a+b
    // })
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.status(200).json({
        ans:a+b
    }) // express hamesha string return krta hai http server pr . hm kabhi number nhi pass kr sakte

})

app.listen(3000,()=>console.log("Server listening on port"))