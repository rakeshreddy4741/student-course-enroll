const express = require('express');
const cors = require("cors");
const { Client } = require("pg");
const bodyParser = require("body-parser");
const path = __dirname + '/public/';
const app = express();
const port = 6070;

// view path
var view_path = require('path');


// Default cros
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse requests of content-type - application/json
app.use(bodyParser.json());


const client = new Client({
    password: "root",
    user: "root",
    host: "postgres",
});


// views engine setup
app.set('views', view_path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serves a folder called `public` that we will create
app.use(express.static(path));


// Student page routes
app.get('/', (req, res) => {
    res.render('index');
});

const db = require("./app/models");
const Role = db.role;

// For production
db.sequelize.sync();

db.sequelize.sync().then(() => {
    //console.log('Drop and Resync Db');
});

// api routes
require('./app/routes/student.routes')(app);
require('./app/routes/course.routes')(app);
require('./app/routes/enrollment.routes')(app);

// Start the server
(async () => {
    await client.connect();

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})();