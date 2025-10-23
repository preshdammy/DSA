const express = require("express")
const port = 5500 | process.env.PORT
const app = express()

app.get("/" , (req, res) =>{
    res.status(200).json([
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
        {obj:"1"},
    ])
})

app.listen(PORT ,()=> `${PORT} Connected`)
