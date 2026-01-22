const { Flights } = require('../models/index.js');
const { Op } = require('sequelize');


function createFilter(data){
    let filter = {};
    if(data.arrivalAirportId){
        filter.arrivalAirportId = data.arrivalAirportId;
    }
    if(data.departureAirportId){
        filter.departureAirportId = data.departureAirportId;
    }
    if(data.minPrice && data.maxPrice){
        Object.assign(filter, {
            [Op.and] : [
                {price : {[Op.lte] : data.maxPrice} },
                {price : {[Op.gte] : data.minPrice} }
            ]
        })
    }
    if(data.minPrice ){
        Object.assign(filter, {price : {[Op.gte] : data.minPrice}});
    }
    if(data.maxPrice){
        Object.assign(filter, {price : {[Op.lte] : data.maxPrice}});
    }
    return filter;
}


const createFlight = async function create(data){
    try{
        const flight = Flights.create(data);
        return flight;
    }
    catch(error){
        console.log("Something went wrong in the repository layer");
        throw {error};
    }
}

const getFlight = async function get(data){
    try {
        const flight = Flights.findByPK(flightId);
        return flight;
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw {error};
    }
}

const getAllFlights = async function getAll(filter){
    try {
        const filterObject = createFilter(filter);
        const flights = await Flights.findAll({
            where : filterObject
        });
        return flights;
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw {error};
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights
};