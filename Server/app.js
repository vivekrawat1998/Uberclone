const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const userRouter = require("./routes/user.routes")
const captainRouter = require('./routes/captain.routes');
const mapRouter = require('./routes/maps.routes');
const riderouter = require("./routes/ride.routes")

const cors = require('cors');
const connectDB = require('./db/db'); 
app.use(cors());

app.use(cookieparser());
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/captains', captainRouter);
app.use('/maps', mapRouter);
app.use('/ride', riderouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});


module.exports = app;