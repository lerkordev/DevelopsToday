const { Country } = require('../db');
const axios = require('axios');

const URL = "https://date.nager.at/api/v3/AvailableCountries";

async function getAllCountries(req , res){
    try{
        const response = (await axios.get(`${URL}`));
        const countries = response.data;
        res.status(200).json(countries);        
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

module.exports = getAllCountries;