const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const db = require('./config/database');

db.connect();

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false}));

app.use(express.json());

app.use('/api/users', userRouter);

app.listen('3000',()=>{
    console.log(`Server up and running on port: 3000`);
})