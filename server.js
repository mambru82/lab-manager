const express = require('express');
const path = require("path");
const exphbs = require("express-handlebars");
const sequelize = require('sequelize');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, () =>console.log("now listening"));

