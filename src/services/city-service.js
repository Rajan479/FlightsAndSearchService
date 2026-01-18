const { CityRepository } = require("../repository/index.js");

const createCity= async function create(newCity){
    try{
        const city = await CityRepository.createCity(newCity);
        return city;
    }
    catch(error){   
        console.log("Something went wrong in the service layer");
        throw new {error};
    }
}
    
const updateCity = async function update(cityId, updatedCity){
    try{
        const city = await CityRepository.updateCity(cityId, updatedCity);
        return city;
    }
    catch(error){
        console.log("Something went wrong in the service layer");
        throw new {error};
    }
}
    
const deleteCity = async function deletecity(cityId){
    try{
        const response = await CityRepository.deleteCity(cityId);
        return response;
    }
    catch(error){
        console.log("Something went wrong in the service layer");
        throw new {error};
    }
}
    
const getCity = async function get(cityId){
    try{
        const city = await CityRepository.getCity(cityId);
        return city;
    }
    catch(error){
        console.log("Something went wrong in the service layer");
        throw new {error};
    }
}

const getAllCities = async function getAll(filter){
    try{
        const cities = await CityRepository.getAllCities({ name : filter.name });
        return cities;
    }
    catch(error){
        console.log("Something went wrong in the service layer");
        throw new {error};
    }
}

module.exports = {
    createCity,
    updateCity,
    deleteCity,
    getCity,
    getAllCities
}; 