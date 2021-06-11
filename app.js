// Source: https://auth0.com/docs/quickstart/webapp/nodejs

const session = require('express-session');
const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const validator = require('validator');
const {MongoClient} = require('mongodb')

// Routes
var userInViews = require('./lib/middleware/userInViews');
var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var token = require('crypto').randomBytes(48).toString('hex');

// config express-session
var sess = {
  secret: token,
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if (app.get('env') === 'production') {
  // Use secure cookies in production (requires SSL/TLS)
  sess.cookie.secure = true;

  // "Unable to verify authorization request state"
  app.set('trust proxy', 1);
}

app.use(session(sess));

// Load environment variables from .env
var dotenv = require('dotenv');
dotenv.config();

// Load Passport
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL:
        process.env.AUTH0_CALLBACK_URL || 'http://localhost:8080/callback'
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  );
  
  passport.use(strategy);
  
  app.use(passport.initialize());
  app.use(passport.session());
  
passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

// Template engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(userInViews());
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);

// async function main() {
//   const uri = "mongodb+srv://hackathon-boi-69:kniy4maux8RIR@eeff@captcha-db.91oqh.mongodb.net/captcha-db?retryWrites=true&w=majority";
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();
//   } catch (e) {
//   } finally {
//     await client.close();
//   }
// }

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});