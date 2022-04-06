
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
//hasher le mot de passe
// UsersSchema.pre("save", async function (next){
// const salt=await bcrypt.genSalt();
//  await bcrypt.hash(this.password, salt)

// next();} )

//comparer le mot de passe lors de la connection 

// UsersSchema.statics.login= async function (email , password){


//     const user = 
// }

// UsersSchema.plugin(uniqueValidation);
module.exports=mongoose.model('Users',UsersSchema)