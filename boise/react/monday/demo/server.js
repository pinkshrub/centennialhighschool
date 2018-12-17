const express = require("express");


const app = express(); // this creates an expressified instance of an httpServer

// tell it where to look for static files such as JS
app.use(express.static(__dirname+"/static"));

app.get("",function(request, response){
    response.sendFile(__dirname+"/main.html");
});



app.listen(8000, (errs)=>console.log(errs?errs:"gucci"));