const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    Name: { 
        type: String ,
        required:[true, "Name is required"],
        minlength: [2, "That's a terrible name"]
    },
    Type: { 
        type: String,
        required:[true, "Type is required"],
        minlength: [3, "What type of animal is that?"] 
    },
    Description: { 
        type: String,
        required:[true, "Description is required"],
        minlength: [10, "That's a terrible description"]
    },
    Skill1: { 
        type: String,
        
        minlength: [3, "That's a terrible skill"]
    },
    Skill2: { 
        type: String,
        
        minlength: [3, "That's a terrible skill"]
    },
    Skill3: { 
        type: String,
        
        minlength: [3, "That's a terrible skill"]
    }
}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);
