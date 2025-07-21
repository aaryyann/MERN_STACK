const express = require('express')
const app = express()

app.get('/multiply/:a/:b' , function (req, res){
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const ans = a*b

    res.send(ans.toString()) // express hamesha string return krta hai http server pr . hm kabhi number nhi pass kr sakte
})

app.get('/add/:a/:b' , function (req, res){
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const ans = a+b

    res.send(ans.toString()) // express hamesha string return krta hai http server pr . hm kabhi number nhi pass kr sakte
})

app.get('/subtract/:a/:b' , function (req, res){
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const ans = a-b

    res.send(ans.toString()) // express hamesha string return krta hai http server pr . hm kabhi number nhi pass kr sakte
})

app.listen(3000)