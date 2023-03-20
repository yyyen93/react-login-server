const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex')({
    client: 'pg',
    connection: {
        host : 'dpg-cgc0mv1mbg55nqghsgq0-a',
        port : 5432,
        user : 'test_at71_user',
        password : 'kVcdwRFTN7TnMNavrTy2SI5e6ovwG2fl',
        database : 'test_at71'
    }
});

const home = require('./controllers/home');
const register = require('./controllers/register');
const signin = require('./controllers/signin');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{home.handleHome(knex)});
app.post('/register', (req,res)=> {register.handleRegister(knex,bcrypt)});
app.post('/signin', (req,res)=> {signin.handleSignin(knex,bcrypt)});



app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})