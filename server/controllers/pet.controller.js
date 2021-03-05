const { Pet } = require('../models/pet.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPet = (request, response) => {
    const { Name, Type, Description, Skill1, Skill2, Skill3 } = request.body;
    Pet.create({
        Name,
        Type,
        Description,
        Skill1,
        Skill2,
        Skill3
    })
        .then(pet => response.json(pet))
        
        .catch(errors => response.json(errors));
        
}
module.exports.findAllPets = (req, res) => {
    Pet.find()
      .then(pet => res.json(pet))
      .catch(err => res.json({ message: "no, not again", error: err }));
  };


module.exports.getOnePet = (req, res) =>{
    Pet.findOne({_id: req.params._id})
    .then(pet => res.json(pet))
    .catch(err => res.json({ message: "no, not again", error: err }));

}


module.exports.editOnePet = (req, res) =>{
    Pet.findByIdAndUpdate({_id: req.params._id}, req.body)
    .then(pet => res.json(pet))
    .catch(err => res.json({ message: "no, not again", error: err }));

}


module.exports.deleteSinglePet = (req, res) =>{
    Pet.findByIdAndRemove({_id: req.params._id})
    .then(() => res.json({msg:"goodbye friend"}))
    .catch(err => res.json({ message: "no, not again", error: err }));

}

module.exports.getSinglePet = (req, res) =>{
    Pet.findOne({_id: req.params._id})
    .then(pet => res.json(pet))
    .catch(err => res.json({ message: "no, not again", error: err }));

}