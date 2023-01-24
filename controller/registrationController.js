const express = require('express');
const mongoose = require('mongoose');
const Registrationdata = require('../src/models/regsitermodels'); //this is model of the database
const router = express.Router();
const hbs = require('hbs');
// creating and updating users or employees

router.get("/", (req,res)=>{
    res.render("createuser",{
        viewTitle: "Create New Employee"
    });
 });

router.get("/createuser", (req,res)=>{
   res.render("createuser",{
    viewTitle: "Create New Employee"
   }) 
});

router.get("/employeeList", (req,res)=>{
    Registrationdata.find((err,docs)=>{
       
        if(!err){
            res.render("employeeList",{
                allEmployeeList : docs,
                viewTitle: "Employee List"
            });
        }
    })
 });

 router.post("/", (req,res)=>{
   
    if(req.body._id == "" || req.body._id == undefined){
        console.log("Id is missed");
        insertRecord(req,res); 
    }
    else{
        console.log(req.body._id);
        updateRecord(req,res);
    }
 })

//  id.match(/^[0-9a-fA-F]{24}$/)

//function for insert record 

function insertRecord(req,res){
    const newregistrationData = new Registrationdata();
    newregistrationData.first_name = req.body.first_name;
    newregistrationData.last_name = req.body.last_name;
    newregistrationData.gender = req.body.gender;
    newregistrationData.email = req.body.email;
    newregistrationData.phone = req.body.phone;

    newregistrationData.save((err,doc)=>{
        if(!err){
            res.redirect("employeeList");
        }
        else{
          console.log(err);
        }
    });
}


//function for update record 


function updateRecord(req,res){
    Registrationdata.findOneAndUpdate({_id:req.body._id}, req.body, {
        new:true
    },
        (err,doc) =>{
            if(!err){
                console.log(doc);
                res.redirect("employeeList");
            }
            else{
                console.log(err);
            }
        }
    )
}

router.get("/:id", (req,res)=>{
    Registrationdata.findById(req.params.id, (err, doc)=>{
        if(!err){
            
            res.render("createuser", {
                viewTitle: "Update User",
                existingData: doc
            })
        }

        else{
            console.log(err);
        }
    })
})


router.get('/delete/:id', (req,res) => {
    Registrationdata.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.redirect("/employeeList");
        }
        else{
            console.log("Delete can not be done" + ' ' + err);
        }
    })
});

//setting up radio checked

hbs.registerHelper ("setChecked", function (value, currentValue) {
    console.log(value + " " + currentValue)
    if ( value === "male") {
      console.log('male aa gya')
       return "checked";
    }

    else {
       return "";
    }
 });

module.exports = router;