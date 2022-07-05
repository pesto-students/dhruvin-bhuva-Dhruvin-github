const express = require('express');

const weatherRouter = require('./Routes/Weather');
const forecastRouter = require('./Routes/Forecast');
// const bodyParser = require('body-parser');

const app = express();
const port = 5400;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.post('/',(req,res) => {
    res.send('Welcome To Weather API ... ');
})

app.use('/weather',weatherRouter);
app.use('/forecast',forecastRouter);

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
});
