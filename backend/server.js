require('dotenv').config()

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();


// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})
app.use(cors());
// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening to`, process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })

