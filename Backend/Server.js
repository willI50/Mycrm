const express = require("express");
const Users = require("./Models/Users");
const mongoose = require("mongoose");
const app = express();
const User = require("./Models/Users");
const Ticket = require("./Models/Tickets");
const port = process.env.port || 4002;

var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Tickets = require("./Models/Tickets");
dotenv.config();
const bcrypt = require("bcrypt");

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const req = require('express/lib/request');
// const uri = "mongodb+srv://WILL5:94104466@cluster0.vlgwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
mongoose
  .connect("mongodb://localhost/damasF")
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((e) => console.log("Connexion à MongoDB échouée : " + e));
app.use(bodyParser.json({ parameterLimit: 10000, limit: "50mb" }));
app.use(bodyParser.json());

// DEFINITION DES CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//recevoir les données envoyés depuis le frontend et gestion de l'authentification
app.post("/api/Login", (req, res, next) => {
  if (req.body !== undefined) {
    
    Users.findOne(
      {
        email: req.body.email,
        
      },
      async function (err, user) {
        if (user) {
         

            bcrypt.compare(req.body.password , user.password ,  function (error, isMatch){

              if (error) {
                throw error
              }
              else if (!isMatch) {
                res.json("Password doesn't match!");
                console.log("Password doesn't match!")
              }
                   
           else {
             console.log(isMatch);

           //  generer un token
          //  1er parametre est le corps de la requet
          //  2e parametre la clé secret
          //  3e parametre le temps de validité du token
          const token = jwt.sign(req.body.email, process.env.TOKEN_SECRET);

          //resultat renvoyer apres le login
          const my = [user.password, token];
          res.status(201).json(my);

          console.log(user);

           }
           


          }  )
          
        }
      }
    );
  }
});

// gestion de l'inscription client
app.post("/api/inscription", (req, res, next) => {
  if (req.body !== undefined) {
    const user = new User(req.body);
    user
      .save()
      .then(
        res.status(201).json({ message: "User Enregistrer!!" }),
        console.log(user)
      );
  } else if (req.body.email == User.email) {
    res.status(400).json("erreur");
  } else {
    res.status(400).json({ message: "element NON enregistré" });
  }
  next();
});

//nouveaux ticket dans le backend

app.post("/api/NewTicket", (req, res, next) => {
  if (req.body !== undefined) {
    const ticket = new Ticket(req.body);
    ticket
      .save()
      .then(
        res.status(201).json({ message: "Ticket Enregistrer!!" }),
        console.log(req.body)
      );
  } else {
    res.status(400).json({ message: "element NON enregistré" });
  }
  next();
});

//renvoie des elements du ticket vers le frontend

app.get("/api/NewTicke", (req, res, next) => {
  Tickets.find({}, function (err, resTicket) {
    if (resTicket) {
      // console.log(resTicket);
      res.status(200).json(resTicket);
    }
  });
});

app.listen(port, () => console.log("Listening at ODC on  " + port));
