const { City } = require('../models/index.js');
const { Op } = require('sequelize');

const createCity = async function create({ name }){
    try{
        const city = await City.create({
            name : name
        });
        return city;
    }
    catch(error){
        console.log("Something went wrong in the repository layer");
        throw new {error};
    }
}

const updateCity = async function update(cityId, updatedCity){
    try{
        const updatedCityRow = await City.update(updatedCity, {
            where : {
                id : cityId
            }
        });

        if(updatedCityRow === 0) return null;
        const city = await City.findByPk(cityId);
        return city;
    }
    catch(error){
        console.log("Something went wrong in the repository layer");
        throw new {error};
    }
}

const deleteCity = async function deletecity(cityId){
    try{
        await City.destroy({
            where : {
                id : cityId
            }
        });
        return true;
    }
    catch(error){
        console.log("Something went wrong in the repository layer");
        throw new {error};
    }
}

const getCity = async function get(cityId){
    try{
        const city = await City.findByPk(cityId);
        return city;
    }
    catch(error){
        console.log("Something went wrong in the repository layer");
        throw new {error};
    }
}

const getAllCities = async function getAll(filter){
    try{
        if(filter.name){
            const cities = await City.findAll({
                where : {
                    name : {
                        [Op.startsWith] : filter.name
                    }
                }
            });
            return cities;
        }
        const cities = await City.findAll();
        return cities;
    }
    catch(error){
        console.log("Something went wrong in the repository layer");
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