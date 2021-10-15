const express = require('express');
const app = express();
var cors = require('cors');

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// To prevent cors error
app.use(cors());

//listen
app.listen(8000, () => {
    console.log('Server up and running');
});