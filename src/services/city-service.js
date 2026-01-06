const { CityRepository } = require("../repository/index.js");

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(newCity){
        try{
            const city = await this.cityRepository.createCity(newCity);
            return city;
        }
        catch(error){   
            console.log("Something went wrong in the repository layer");
            throw new {error};
        }
    }
    
    async updateCity(cityId, updatedCity){
        try{
            const city = await this.cityRepository.updateCity(cityId, updatedCity);
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw new {error};
        }
    }
    
    async deleteCity(cityId){
        try{
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw new {error};
        }
    }
    
    async getCity(cityId){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw new {error};
        }
    }

    async getAllCities(){
        try{
            const cities = await this.cityRepository.getAllCities();
            return cities;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw new {error};
        }
    }
} 

module.exports = CityService; 