const express = require("express");
require("dotenv").config();
const User = require("./models/User");
const Producto = require("./models/Producto");
const Categorias = require("./models/Categorias");

// inicializando una app de express
const app = express();

//crear variables
const port = process.env.PORT || 3000;

app.get("/", function(req, res){
    return res.json({mensaje: "Saludos desde mi App de Node (MODIFICADO) último 3"});
});

app.listen(port, function(){
    console.log("Servidor corriendo en el puerto 3000 (ultima modificación) 3");
})