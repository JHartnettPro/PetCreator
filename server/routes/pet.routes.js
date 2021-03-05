const PetController = require('../controllers/pet.controller');
module.exports = function(app){
    
    app.post('/api/pet', PetController.createPet);
    app.get("/api/findAllPets", PetController.findAllPets);
    app.get("/api/edit/:_id", PetController.getOnePet);
    app.put("/api/edit/:_id", PetController.editOnePet);
    app.delete("/api/:_id", PetController.deleteSinglePet);
    app.get("/api/single/:_id", PetController.getSinglePet)
    
}
