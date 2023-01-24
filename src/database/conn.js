const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Jhonson", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection successfull');
}).catch((err)=>{
    console.log('Connection not successfull' + err);
});

require('../models/regsitermodels');