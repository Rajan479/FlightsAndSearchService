const ValidateCreateFlight = function(request, response, next){
    if(!request.body.flightNumber ||
        !request.body.airplaneId ||
        !request.body.departureAirportId ||
        !request.body.arrivalAirportId ||
        !request.body.arrivalTime ||
        !request.body.departureTime ||
        !request.body.price
    ){
        return response.status(400).json({
            data : {},
            success : false,
            message : "Invalid request body for create flight",
            err : "Missing mandatory properties to create a flight"
        });
    }

    next();
};

module.exports = {
    ValidateCreateFlight
}