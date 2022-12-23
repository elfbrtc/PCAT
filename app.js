const express = require('express');
const path=require('path');
const ejs = require('ejs');

 const app = express();
//Template engine
app.set("view engine", "ejs");

//Middleware
 app.use(express.static('public'))

//Routes
 app.get('/about', (req, res) => {
   res.render('about')
 })

 app.get('/add', (req, res) => {
  res.render('add')
})

app.get('/', (req, res) => {
  res.render('index')
})

 const port = 3000;
 app.listen(port, ()=>{
    console.log(`Sunucu ${port} portunda başlatıldı.`)
 })