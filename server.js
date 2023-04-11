// import express from "express";
const express = require("express");

const app = express();
const port = 8081;

// khai bao route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/hello", (req, res) => {
    res.send("Hello the second time!");
});
app.get("/kaka", (req, res) => {
    res.send("<h1>Kaka</h1>");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
