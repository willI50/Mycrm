const mongoose = require('mongoose')
const uniqueValidation = require('mongoose-unique-validator')


const TicketsSchema=new mongoose.Schema({
subject:{type:String},
date:{type:String },
text:{type:String}



    
},
{  timestamps:true})
TicketsSchema.plugin(uniqueValidation);
module.exports=mongoose.model("Tickets",TicketsSchema)