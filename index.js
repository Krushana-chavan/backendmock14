const express = require('express')

const app = express()
const cors = require("cors")
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=> res.send('hello'))




const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

app.get('/random', (req, res) => {
    let randomWord = "";
    const length = Math.floor(Math.random() * 6) + 1;
    for (let i = 0; i < length; i++) {
        randomWord += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    res.send(randomWord);
});
app.get('/random-four', (req, res) => {
    let randomWord = "";
    for (let i = 0; i < 4; i++) {
        randomWord += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    res.send(randomWord);
});






app.listen(8080,()=>{  console.log('server statrted on port 8080')})

// define a list of words


// start the server

