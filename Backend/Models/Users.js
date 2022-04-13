//voici mon model mongoose
const mongoose = require('mongoose')
const uniqueValidation = require('mongoose-unique-validator')
const bcrypt=require('bcrypt');
const SALT_WORK_FACTOR = 10;


const UsersSchema = new mongoose.Schema( {

    Nom:{type:String  ,require:true},
    email:{type:String,require:true,unique:true},
    Ville:{type:String,require:true},
    Telephone:{type:String,require:true},
    password:{type:String,require:true},

         
    
},
{  timestamps:true  }
)
UsersSchema.pre("save", function (next) {
    const user = this
  
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          bcrypt.hash(user.password, salt, function(hashError, hash) {
            if (hashError) {
              return next(hashError)
            }
  
            user.password = hash;
            console.log(user.password);
            next()
          })
        }
      })
    } else {
      return next()
    }
  })
uniqueValidation


module.exports=mongoose.model('Users',UsersSchema)