const { CityService } = require("../services/index.js");

const cityService = new CityService();

const create = async function createCity(request, response){
    try{
        const city = await cityService.createCity(request.body);
        return response.status(201).json({
            data : city,
            success : true,
            message : 'Successfully created a city',
            error : {}
        });
    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create a city',
            err : error
        });
    }
}

const update = async function updateCity(request, response){
    try{
        const city = await cityService.updateCity(request.params.id, request.body);
        return response.status(201).json({
            data : city,
            success : true,
            message : 'Successfully updated a city',
            error : {}
        });
    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            data : {},
            success : false,
            message : 'Not able to update the city',
            err : error
        });
    }
}

const destroy = async function deleteCity(request, response){
    try{
        const response = await cityService.deleteCity(request.params.id);
        return response.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city',
            error : {}
        }); 
    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            data : {},
            success : false,
            message : 'Not able to delete the city',
            err : error
        });
    }
}

const get = function getCity(request, response){
    try{
        const city = cityService.getCity(request.params.id);
        return response.status(201).json({
            data : city,
            success : true,
            message : 'Successfully fetched a city',
            error : {}
        });
    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            data : {},
            success : false,
            message : 'Not able to get the city',
            err : error
        });
    }
}

const getAll = async function(request, response){
    try{
        const cities = await cityService.getAllCities();
        return response.status(201).json({
            data : cities,
            success : true,
            message : 'Successfully fetched all cities',
            error : {}
        });
    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            data : {},
            success : false,
            message : 'Not able to fetch the cities',
            err : error
        });
    }
}

module.exports = {
    create : create,
    update : update,
    destroy : destroy,
    get : get,
    getAll : getAll
}