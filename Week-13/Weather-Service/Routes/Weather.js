const express = require('express');

const axios = require('axios');

const router = express.Router();

const weatherurl = 'https://api.weatherapi.com/v1/current.json';

const key = 'c08615a8cfcf4484b1a134648222506';

router.get('/', (req, res) => {
    res.write('<h1>Welcome to Weather details page</h1>')
})

router.post('/getAnyCityWeather', async (req, res) => {


    let city = req.body.city;

    let cityArray = city.split(",");

    let ResJson = [];

    for (const city of cityArray) {

        let cityResArray = [];

        await axios.get(`${weatherurl}?key=${key}&q=${city}`)
                .then((val) => {

                    cityResArray.push(city, val.data.current);
                    ResJson.push(cityResArray)

                })
                .catch((err) => res.send('Please Enter Valid City'))
    }

    res.send(ResJson);

})

module.exports = router;