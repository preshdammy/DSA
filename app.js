const express = require("express")
const port = 5500 | process.env.PORT
const app = express()

app.get("/" , (req, res) =>{
   res.send(
    "Welcome to Express Server. Preciou here"
   )
})

app.listen(port ,()=> `${port} Connected`)
