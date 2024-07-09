import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { LocalAuthStrategy } from './strategies/local.passport.js';
import { GoogleAuthStrategy } from './strategies/google.passport.js';
import { envs } from '../env.js';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passReqToCallback: false,
    },
    LocalAuthStrategy
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: envs.googleClientId,
      clientSecret: envs.googleClientSecret,
      callbackURL: `${envs.serverUrl}/auth/google/callback`,
      passReqToCallback: false,
    },
    GoogleAuthStrategy
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
