import {} from "./db"; //Database import
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use(new LocalStrategy(username, password, isDone)
    {
        
    });
}