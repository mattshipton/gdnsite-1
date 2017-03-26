"use strict";

const config = require("./config.json");

const app = require("./index.js").app;
const passport = require("./index.js").passport;
const Router = require("koa-router");

const routes = new Router();

const main = require("./controllers/main.js");
const account = require("./controllers/account.js");

// routes
routes.get("/", main.index);
routes.get("/join", main.join);
routes.get("/gamejam", main.jam);
routes.get("/gamejam/:id", main.gamejam);

routes.get("/vote", main.vote);
routes.get("/votes/:id");
routes.post("/votes/:id");

// for passport
routes.get("/login", account.login);
routes.get("/logout", account.logout);
routes.get("/account", account.index);

// you can add as many strategies as you want
routes.get("/auth/discord",
	passport.authenticate("discord")
);

routes.get("/auth/discord/callback",
	passport.authenticate("discord", {
		successRedirect: "/",
		failureRedirect: "/"
	})
);

app.use(routes.middleware());
