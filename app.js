import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import "./passport.js";
import authRoute from "./routes/auth.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
    cookieSession({
        name: "session",
        keys: ["crownix"],
        maxAge: 24 * 60 * 60 * 100,
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoute);

app.get("/", (req, res) => {
    res.render("dashboard");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.listen(port, () => {
    console.log(`Social Login | Listening att http://localhost${port}`);
});
