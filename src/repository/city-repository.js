const { City } = require('../models/index.js');

class CityRepository{

    async createCity({ name }){
        try{
            const city = await City.create({
                name : name
            });
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer" + error);
        }
    }

    async updateCity(cityId,{ name }){
        try{
            const city = await City.update(name, {
                where : {
                    id : cityId
                }
            });
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer" + error);
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where : {
                    id : cityId
                }
            });
            return true;
        }
        catch(error){
            console.log("Something went wrong in the repository layer" + error);
        }
    }

    async getCity(cityId){
        try{
            const city = City.findByPk(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer" + error);
        }
    }

}

module.exports = {
    CityRepository : CityRepository
}