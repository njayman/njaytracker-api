//environment variable configuration
if (process.env.NODE_ENV !== 'production') { 
    require('dotenv').config();
}
//module imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//component import
const userRouter = require('./routes/user');

//declarations
const app = express();
app.use(express.json())
app.use(cors());
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const mongoOptions = { useUnifiedTopology: true, useNewUrlParser: true }

//mongodb connection
mongoose.connect(mongoUri, mongoOptions)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
    console.log("Database is up and running!")
})

app.use('/api', userRouter);

//listen
app.listen(port, () => {
    console.log(`Server is booming @ port ${port}!`)
});
