import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json({limit: '50mb'}));

app.listen(80, ()=>{
    console.log("Server running on port 80");
});

app.get('/',(req, res) =>{
    res.send("API is running");
});

app.get('/health',(req, res) =>{
    res.send("OK");
});

app.get('/hello',(req, res) =>{
    res.send("Hello, World!");
});
