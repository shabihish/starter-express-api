const express = require('express')
const app = express()
app.all('/', (req, res) => {
   // let a = req.query.a
   // let b = req.query.b
    console.log("Just got a request!")


    const axios = require('axios') 

  
// Make request 
var a;
axios.get('https://google.com')
.then(res => a = res.data) 
.catch(err => console.log(err))
 
res.send(a)


})
app.listen(process.env.PORT || 3000)
