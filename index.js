const express = require('express');
// const destinations = require('./db.js').destinations
const {destinations}  = require('./db.js');

const server = express();

server.use(express.json());

const port = 3000;
console.log('YO');
server.get("/JeradXander", function (req, res) {
    res.send('<img style="width: 100vh; height: 100wh;"src="https://media.giphy.com/media/l0HU3WCEmWWmpdoIg/giphy.gif" alt="Kane"  width="250" />');
})

server.listen(port, () => {
    console.log(` sExample app listening at http://localhost:${port}`)
    // console.log(destinations);

    // for (const dest of destinations) {
    //    // console.log(dest);
    // }
});

server.get('/destinations', (reg, res) => {
    res.send(destinations);
})

server.post('/destinations', (req, res) => {
    const { body } = req;
    const { name, location, photo } = req.body;
    //validate that we have name and location

    if (name === undefined || location === undefined) {
        return res.status(400).send({ error: "name and location are required" });
    }

    // res.send('Post hit');
    console.log(req.body);

    destinations.push({
        name: name,
        location: location,
        photo: photo
    });

    res.send({ status: "add Success" })
})

