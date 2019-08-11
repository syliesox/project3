const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
// console.log(keys);
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },

         async (accessToken, refreshToken, profile, done) => {
            console.log(profile);

            const existingUser = await User.findOne({ googleId: profile.id });
            // .then((existingUser) => {
                if (existingUser) {
                   return done(null, existingUser);
                    //already have record w/ this profile ID
            // } else {
                }
                
                //don't have a record with giver ID
                // new User({ googleId: profile.id }).save()
                //     .then(user => done(null, user));
                const user = await new User({ googleId: profile.id }).save();
                 done(null, user);
            }
            )
          );