const express = require('express')
const app = express()
app.all('/', (req, res) => {
    let a = req.query.a
    let b = req.query.b
    console.log("Just got a request!")
    res.send('' + (a+b))
})
app.listen(process.env.PORT || 3000)
