"use strict";

const passport = require("../index.js").passport;
const config = require("../config.json");
const co = require("co");

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

const scopes = ["identify", "email", "guilds"];

const DiscordStrategy = require("passport-discord").Strategy;
// if we have a port other than 80, add it to our callback url
let callback = "";
if (process.env.NODE_ENV === "production") {
	callback = `${config.site.oauth.host}/auth/discord/callback`;
} else {
	callback = `${config.site.oauth.host}:${config.site.port}/auth/discord/callback`;
}

passport.use(new DiscordStrategy({
	clientID: config.site.oauth.discord.clientID,
	clientSecret: config.site.oauth.discord.clientSecret,
	callbackURL: callback,
	scope: scopes
}, (token, tokenSecret, profile, done) => {
	// retrieve user ...
	/* eslint-disable */
	co(function* auth() {
		/* eslint-enable */
		// do some async/yield stuff here to get/set profile data
		done(null, profile);
	}).catch(function onError(e) {
		console.error("Something went terribly wrong!");
		console.error(e.stack);
		done(e, null);
	});
}));
