import GoogleStrategy from "passport-google-oauth20";
import GithubStrategy from "passport-github2";
import passport from "passport";

GoogleStrategy.Strategy;
GithubStrategy.Strategy;

const GOOGLE_CLIENT_ID = "931348457496-jb1trf7q0un8qrei85r0aqji5htioup3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GITHUB_CLIENT_ID = "fe863973cb31fa0f0cd5";
const GITHUB_CLIENT_SECRET = "e447af20b28f1824630e57dece6e689b7c4b8c99";

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.use(
    new GoogleStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
