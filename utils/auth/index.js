const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy');
const jwtEstrategy = require('./strategies/jwt.strategy');


passport.use(LocalStrategy);
passport.use(jwtEstrategy);
