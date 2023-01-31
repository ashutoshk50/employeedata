const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/Jhonson", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log('Connection successfull');
// }).catch((err)=>{
//     console.log('Connection not successfull' + err);
// });

mongoose.set('strictQuery', true);

const database = `mongodb+srv://server01:1%40server01@cluster0.gqrhnix.mongodb.net/registrationData?retryWrites=true&w=majority`;


mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection successfull');
}).catch((err)=>{
    console.log('Connection not successfull' + err);
});

require('../models/regsitermodels');
