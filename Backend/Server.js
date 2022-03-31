const express = require('express');
const Users =require('./Models/Users')
const mongoose=require('mongoose')
const app = express();
const User=require('./Models/Users')
const port= process.env.port || 4002;

var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const req = require('express/lib/request');
// const uri = "mongodb+srv://WILL5:94104466@cluster0.vlgwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
mongoose.connect("mongodb://localhost/damasF").then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((e) => console.log('Connexion à MongoDB échouée : '+e))
  app.use(bodyParser.json({parameterLimit: 10000, limit: '50mb'}));
  app.use(bodyParser.json());
// DEFINITION DES CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//recevoir les données envoyés depuis le frontend
app.post("/api/Login" , (req, res, next) => {
    
          Users.findOne({email:req.body.email, password:req.body.password},(err , user)=>{
            
          console.log(user) } );

          if(req.body!==undefined){  

     // generer un token
     // 1er parametre est le corps de la requet
     // 2e parametre la clé secret
     // 3e parametre le temps de validité du token



            const token = jwt.sign({Id:req.body.email}, process.env.TOKEN_SECRET,)
            .then()
            
                    
                    //le token doit etre envoyé sous format json
                     res.status(201).json({token} ) 
                    
                    
                    }
                    else{
            
                        res.status(400).json({message:"element NON enregistré"})
                    }; next();  

          
        }) ;
   
    





        app.post("/api/inscription" , (req, res, next) =>{

           




          if(req.body!==undefined){
            // const token = jwt.sign({Ident:req.body.email}, process.env.TOKEN_SECRET,)
                
                    const user= new User(req.body);
                    user.save()
                    .then(  res.status(201).json({message:"User Enregistrer!!"} ) , console.log(user))

           
              }
            else{

              res.status(400).json({message:"element NON enregistré"})
          }; next();  }) 
        
        










app.listen(port, () => console.log('Listening at ODC on  '+port));
