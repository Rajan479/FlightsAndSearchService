const {FlightRepository, AirplaneRepository, AirportRepository} = require('../repository/index.js');

const createFlight = async function create(data){
    try{
        const airplane = await AirplaneRepository.getAirplane(data.airplaneId);
        const flight = await FlightRepository.createFlight({
            ...data, totalSeats : airplane.capacity 
        });
        return flight;
    }
    catch(error){
        console.log("Something went wrong in service layer");
        throw {error};
    }
}

const getFlight = async function get(data){
    try{
        const flight = await FlightRepository.getFlight(data);
        return flight;
    }
    catch(error){
        console.log("Something went wrong in service layer");
        throw {error};
    }
}

const getAllFlights = async function getAll(data){
    try{
        const flights = await FlightRepository.getAllFlights(data);
        return flights;
    }
    catch(error){
        console.log("Something went wrong in service layer");
        throw {error};
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights
};