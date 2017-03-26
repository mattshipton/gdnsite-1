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

const scopes = ['identify', 'email', 'guilds'];

const DiscordStrategy = require("passport-discord").Strategy;
// if we have a port other than 80, add it to our callback url
let port = "";
if (config.site.port !== 80) {
	port = `:${config.site.port}`;
}
passport.use(new DiscordStrategy({
	clientID: config.site.oauth.discord.clientID,
	clientSecret: config.site.oauth.discord.clientSecret,
	callbackURL: `${config.site.oauth.host}${port}/auth/discord/callback`,
	scope: scopes
}, (token, tokenSecret, profile, done) => {
	// retrieve user ...
	co(function* auth() {
		// do some async/yield stuff here to get/set profile data
		done(null, profile);
	}).catch(function onError(e) {
		console.error("Something went terribly wrong!");
		console.error(e.stack);
		done(e, null);
	});
}));
