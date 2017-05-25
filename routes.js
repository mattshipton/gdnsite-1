"use strict";

const config = require("./config.json");

const app = require("./index.js").app;
const passport = require("./index.js").passport;
const Router = require("koa-router");

const routes = new Router();

const main = require("./server/controllers/main.js");
const account = require("./server/controllers/account.js");
const vote = require("./server/controllers/votes");
const admin = require("./server/controllers/admin");

function loadHtml() {
	return new Promise((resolve, reject) => {
		fs.readFile("./dist/index.html", {
			"encoding": "utf8"
		}, (err, data) => {
			if (err) return reject(err);
			resolve(data);
		});
	});
};

if (process.env.NODE_ENV === "production") {
	routes.get(/^\/(.*)(?:\/|$)/, function* next(next) {
		if (this.request.url.startsWith("/api")) {
			yield next;
		} else {
			this.body = yield loadHtml();
		}
	});
}

// routes
routes.get("/api/gamejam/:id", main.gamejam);

routes.get("/api/vote", vote.votePage);
routes.post("/api/themes", vote.themes);
routes.get("/api/votes/:id", vote.applyVote);

routes.get("/api/admin", admin.index);
routes.get("/api/admin/votes", admin.votes);
routes.get("/api/votes/remove/:id", admin.removeTheme);

// for passport
routes.get("/api/logout", account.logout);

// you can add as many strategies as you want
routes.get("/api/auth/discord",
	passport.authenticate("discord")
);

routes.get("/api/auth/discord/callback",
	passport.authenticate("discord", {
		successRedirect: "/",
		failureRedirect: "/login"
	})
);

app.use(routes.middleware());
