const { FlightService } = require('../services/index.js');

const create = async function(request, response){
    try{
        const flightRequestData = {
            flightNumber : request.body.flightNumber,
            airplaneId : request.body.airplaneId,
            departureAirportId : request.body.departureAirportId,
            arrivalAirportId : request.body.arrivalAirportId,
            arrivalTime : request.body.arrivalTime,
            departureTime : request.body.departureTime,
            price : request.body.price
        }
        const flight = await FlightService.createFlight(flightRequestData);
        return response.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        });
    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create a flight',
            err : error
        });
    }
}

const getAll = async function(request, response){
    try {
        const flights = await FlightService.getAllFlights(request.query);
        return response.status(201).json({
            data: flights,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data : {},
            success : false,
            message : 'Not able to find the flights',
            err : error
        });
    }
}

module.exports = {
    create,
    getAll
}