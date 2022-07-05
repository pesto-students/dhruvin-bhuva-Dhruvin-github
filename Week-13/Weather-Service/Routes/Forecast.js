const express = require('express');

const axios = require('axios');

const router = express.Router();

const weatherurl = 'https://api.weatherapi.com/v1/forecast.json';

const key = 'c08615a8cfcf4484b1a134648222506';

router.get('/', (req, res) => {
    res.send('Welcome to Weather Forecast page')
})

router.post('/getAnyCityForcast', async (req, res) => {


    let city = req.body.city;
    let days = req.body.days;

    let cityArray = city.split(",");

    let ResJson = [];
    for (const city of cityArray) {

        let cityResArray = [];

        await axios.get(`${weatherurl}?key=${key}&q=${city}&days=${days}`)
            .then((val) => {
                cityResArray.push(city, val.data.forecast);
                ResJson.push(cityResArray)
            })
            .catch((err) => res.send('Please Enter Valid City'))
    }
    res.send(ResJson);
})

module.exports = router;