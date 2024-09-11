require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cors())

// connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Listen to ${process.env.PORT}`)
    })
})
.catch(() => {
    console.log("Can not connect to database");
})
