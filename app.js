const express = require("express");
const app = express();
const port = 1992;
//l'ordre d'appel des middlewares est très important!!!!
app.get('/welcome/:name', (req,res) => {
    
    res.setHeader('Content-Type','text/html;encode=utf8');
    //name est la variable qui sera passer au template 
    res.render('welcome.ejs', {name: req.params.name});
})

app.get('/count/:number', (req,res) => {
    res.render('counter.ejs', {compteur: req.params.number});
})


app.listen(port);
