const { Airplane }= require('../models/index.js');

const getAirplane = async function get(id){
    try {
        const airplane = await Airplane.findByPk(id);
        return airplane;
    } catch (error) {
        console.log("Something went wrong in repository layer");
        throw {error};
    }
}

module.exports = {
    getAirplane
};