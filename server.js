let express = require('express');
let app = express();
let path = require('path');
let cors = require('cors');

const PORT = require('./config').PORT;

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res, next) => {
    res.send("I am here duh...")
});


app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})


app.get('/redirectToLogin', (req, res, next) => {
    let shouldLogin = req.query.success == 'false'
    if(shouldLogin){
        res.status(400).json({
            type:"failure",
            to:"login"
        })
    }else{
        res.status(200).json({
            type:"success",
        })
    } 
})


app.post('/login', (req, res, next) => {
    console.log('ddd', req.body)
    let dEmail = 'admin@localhost.com'
    let dPass = '123';

    let {email, password} = req.body;

    if(dEmail == email && dPass ==password){
        res.status(200).json({
            type:"success",
            to:'http://localhost:5500/client/index.html'
        })
    }else{
        res.status(200).json({
            type:"failed",
        })
    }

})

app.listen(PORT, () => console.log('Locked Pages Started in Port ' + PORT))