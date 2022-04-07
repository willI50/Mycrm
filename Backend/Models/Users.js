//voici mon model mongoose
const mongoose = require('mongoose')
const uniqueValidation = require('mongoose-unique-validator')
const bcrypt=require('bcrypt')


const UsersSchema = new mongoose.Schema( {

    Nom:{type:String  ,require:true},
    email:{type:String,require:true,unique:true},
    Ville:{type:String,require:true},
    Telephone:{type:String,require:true},
    password:{type:String,require:true},

         
    
},
{  timestamps:true  }
)

module.exports=mongoose.model('Users',UsersSchema)