const express = require('express');
const {errorHandler} = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser');




const authRoute = require('./router/auth.route')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/',(req,res,next) => {
    res.send("hello ")
})
app.use('/api/users',authRoute);
app.use(errorHandler);
module.exports = app;
