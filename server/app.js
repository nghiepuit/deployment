"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var express = require("express");
var mongoose = require("mongoose");
var morgan = require("morgan");
var routes_1 = require("./routes");
var cors = require("cors");
var session = require('express-session');
var compression = require('compression');
var app = express();
exports.app = app;
app.use(compression());
dotenv.load({ path: '.env' });
var PORT = 80; // 80 : deployment
app.set('port', (process.env.PORT || PORT));
app.use(cors());
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Key, Authorization");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || 'materialshop-secret'
}));
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shopnx-dev', { useMongoClient: true });
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://nghiepuit:Nghiep2014@ds115671.mlab.com:15671/shop-dev', { useMongoClient: true });
var db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
    require('./seed'); // Seed database with some sample data
    routes_1.default(app);
    app.listen(app.get('port'), function () {
        console.log('ShopNx listening on port ' + app.get('port'));
    });
});
//# sourceMappingURL=app.js.map