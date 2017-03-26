"use strict";

const config = require("../config.json");

let user = null;

module.exports.index = function* index() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	yield this.render("index", {
		title: config.site.name,
		user: user
	});
};

module.exports.join = function* join() {
	this.redirect("https://discord.gg/sWsrrJQ")
}

module.exports.jam = function* jam() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	yield this.render("jam", {
		title: config.site.name,
		user: user
	});
}

module.exports.gamejam = function* gamejam() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	yield this.render("gamejam", {
		title: config.site.name,
		user: user
	});
}

module.exports.vote = function* vote() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	} else {
		throw new Error("You must sign in before voting!");
	}
	yield this.render("vote", {
		title: config.site.name,
		user: user
	});
}