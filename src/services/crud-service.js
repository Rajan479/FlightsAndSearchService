function CrudService(repository){

    async function create(data){
        try {
            const response = await repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;            
        }
    }

    async function update(id, data){
        try {
            const response = await repository.update(id, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async function destroy(id){
        try {
            await repository.destroy(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async function get(id){
        try {
            const response = await repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async function getAll(){
        try {
            const response = await repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    return {
        create,
        update,
        destroy,
        get,
        getAll
    }
};

module.exports = CrudService;