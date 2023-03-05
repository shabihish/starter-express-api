const express = require('express')
const app = express()
app.all('/', (req, res) => {
   const axios = require('axios') 
   var a;
   axios.get('https://google.com')
      .then(res => a = res.data) 
      .catch(err => console.log(err))

   res.send(a)


})
app.listen(process.env.PORT || 3000)
