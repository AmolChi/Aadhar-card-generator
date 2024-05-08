const express = require('express');
const cors = require('cors');
const route = require('./routes/route');
const { connect } = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors({
    origin:'*'
}))

app.use(express.json());
app.use('/api/v1/user',route);

const start = async()=>{
    try{
        await connect(process.env.MONGO_URL);
        app.listen(process.env.PORT,()=>{
            console.log('Connected to DB');
            console.log('Hearing at port ', process.env.PORT);
        })
    }catch(error){
        console.log(error);
    }
}

start();
