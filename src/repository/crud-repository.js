function CrudRepository(model){   

    async function create(data){
        try {
            const result = await model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error};
        }
    }

    async function update(modelId, data){
        try {
            const result = await model.update(data, {
                where : {
                    id : modelId
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error};
        }
    }

    async function destroy(modelId){
        try {
            await model.destroy({
                where : {
                    id : modelId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error};
        }
    }

    async function get(modelId){
        try {
            const result = await model.findByPK(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error};
        }
    }

    async function getAll(){
        try {
            const result = await model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error};
        }
    }

    return {
        create,
        update,
        destroy,
        get,
        getAll
    };
}

module.exports = CrudRepository;