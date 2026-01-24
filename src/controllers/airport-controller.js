const { AirportService } = require('../services/index.js');

const createAirport = async function(request, response){
    try{
        const result = await AirportService.create(request.body);
        return response.status(201).json({
            message : 'Successfully created the airport',
            err : {},
            data : result,
            success : true
        })
    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            data : {},
            success : false,
            err : error,
            message : 'Cannot create a new airport'
        });
    }
};

module.exports = {
    createAirport
}