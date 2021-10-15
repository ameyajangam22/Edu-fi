require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/db')();
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();

// passport config
require('./config/passport')(passport);

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  }),
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// To prevent cors error
app.use(cors());

app.use('/auth', require('./routes/auth'));

//listen
app.listen(8000, () => {
  console.log('Server up and running');
});
