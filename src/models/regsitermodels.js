const mongoose = require('mongoose');

const registerSchema =  new mongoose.Schema({
    first_name: {
        type: String,
        minlength: 3,    
    },
    last_name: {
        type: String,
       
    },
    gender:{
        type: String,
    },

    email:{
        type: String,
    },
    
    phone:{
        type: Number,
        minlength: 10,
        maxlength: [10,"Please enter a valid phone no"]
    }
});

// creating a collection

const Registrationdata = new mongoose.model('Registrationdata',registerSchema);

module.exports = Registrationdata;