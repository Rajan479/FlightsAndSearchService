const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index.js');

const AirportService = CrudService(AirportRepository);

module.exports = AirportService;