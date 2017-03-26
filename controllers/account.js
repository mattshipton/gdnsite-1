"use strict";

const config = require("../config.json");

module.exports.login = function* login() {
	let user = null;
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	yield this.render("login", {
		user: user
	});
};

module.exports.logout = function* logout() {
	this.logout();
	this.redirect("/");
};

module.exports.index = function* index() {
	let user = null;
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	} else {
		return this.redirect("/");
	}
	yield this.render("account", {title: config.site.name, user: JSON.stringify(user, null, 2)});
};
