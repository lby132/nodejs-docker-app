const express = require('express');
const PROT = 8080;

//APP
const app = express();
app.get('/', (req, res) => {
    res.send("Hello World")
});

app.listen(PROT); 