const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.port || 3000;

let corsOptions = {
    origin: 'http;//localhost:8081'
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) =>{
    res.json({message: "Welcome"});
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})