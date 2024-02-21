const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./db/connection')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended : false}))
app.use(express.json({limit : '16kb'}))
app.use("/api/v1", require("./routes/users.routes"))

connectDB()


app.get('/', (req, res) => {
    res.send('this is home route')
})

app.listen(PORT, () => console.log(`server is live on port number ${PORT}`))