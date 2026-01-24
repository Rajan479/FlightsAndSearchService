const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index.js');

const AirportRepository = CrudRepository(Airport);

module.exports = AirportRepository;