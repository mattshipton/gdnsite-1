"use strict";

const config = require("../config.json");
const db = require("../helpers/db");
const common = require("../helpers/common");

module.exports.index = function* index() {
	let user = null;
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	yield this.render("index", {
		title: config.site.name,
		user: user
	});
};

module.exports.success = function* success() {
	yield this.render("success", {
		title: config.site.name
	});
};

module.exports.voted = function* voted() {
	yield this.render("voted", {
		title: config.site.name
	});
};

module.exports.join = function join() {
	this.redirect("https://discord.gg/sWsrrJQ");
};

module.exports.jam = function* jam() {
	let user = null;
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	yield this.render("jam", {
		title: config.site.name,
		user: user
	});
};

module.exports.gamejam = function* gamejam() {
	let user = null;
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	yield this.render("gamejam", {
		title: config.site.name,
		user: user
	});
};

module.exports.vote = function* vote() {
	let user = null;
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	const data = yield db.runView("themes/all", null, "themes");
	yield this.render("vote", {
		title: config.site.name,
		user: user,
		themes: data.results
	});
};
