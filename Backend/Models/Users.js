
const mongoose = require('mongoose')
const uniqueValidation = require('mongoose-unique-validator')



const UsersSchema = new mongoose.Schema( {

    nom:{type:String,require:true},
    email:{type:String,require:true, unique:true},
    Ville:{type:String,require:true},
    Telephone:{type:String,require:true},
    password:{type:String,require:true},
    // confirmepassword:{type:String,require:true},
   





})
UsersSchema.plugin(uniqueValidation);
module.exports=mongoose.model('Users',UsersSchema)