const express = require('express');
const cors=require('cors');
const port=process.env.PORT||5000;

const app = express();



// middleware

app.use(cors());


app.use(express.json());


app.get('/',(req,res) => {

req.send('emajohn is running ')

})


app.listen(port,(req,res) => {

    console.log('John is running is on',port)
})