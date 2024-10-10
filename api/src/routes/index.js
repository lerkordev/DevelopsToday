const getAllCountries = require('../controllers/getAllCountries')
const getCountriesById = require('../controllers/getCountriesById')
const { Router } = require('express');

const router = Router();

router.get('/countries', getAllCountries);
router.get('/countries/:idPais', getCountriesById);

module.exports = router;