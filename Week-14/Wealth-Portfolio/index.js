const express = require('express');
// var compression = require('compression')

const authRouter = require('./Routes/authentication');
const financeRouter = require('./Routes/finance');
const uploadRouter = require('./Routes/upload');

const app = express();

const port = 5400;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(compression());
app.set('view engine', 'pug');
// app.set('views', './views')

app.get('/',(req,res)=>{
    // res.send('Welcome to Wealth Portfolio App');
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.use('/authentication',authRouter);
app.use('/finance',financeRouter);
app.use('/upload',uploadRouter);

app.listen(port, ()=>{
    console.log(`Server is Running on port ${port}`)
});

