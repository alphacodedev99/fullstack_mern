const express = require('express')
const app = express()
const cors = require('cors');
const port = 4000
// routers
const usersRoute = require('./routers/users.route');

// mongoose
const mongoose = require('mongoose');
const MONGO_DB_URL = require('./config/db.config');
const authRoute = require('./routers/auth.route');




mongoose.connect(MONGO_DB_URL)
    .then((res) => {
        console.log('MongoDB connected')
    })
    .catch(err => console.log(err))

// FOR CORS
app.use(cors());
// to change all json to object
app.use(express.json());

// create router for users
app.use('/api/authUser', authRoute)

// listen port 4000 for server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))