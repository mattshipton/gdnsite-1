"use strict";
const db = require("../helpers/db");
const common = require("../helpers/common");

module.exports.index = function* index() {
	let user = null;
	if (this.isUnauthenticated()) {
		this.redirect("/login");
	}
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	if (user.admin) {
		yield this.render("admin/index", {
			user: user
		});
	} else {
		throw new Error("Forbidden - You do not have sufficient priveldges!");
	}
};

module.exports.votes = function* votes() {
	let user = null;
	if (this.isUnauthenticated()) {
		this.redirect("/login");
	}
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	if (user.admin) {
		let data = yield db.runView("themes/all", null, "themes");
		data = common.sortbyVotes(data.results);
		yield this.render("admin/vote", {
			user: user,
			themes: data
		});
	} else {
		throw new Error("Forbidden - You do not have sufficient priveldges!");
	}
};

module.exports.removeTheme = function* removeTheme() {
	let user = null;
	if (this.isUnauthenticated()) {
		this.redirect("/login");
	}
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	if (user.admin) {
		if (this.params.id === null) {
			throw new Error("Missing parameters!");
		}
		const document = yield db.removeDocument(this.params.id, "themes");
		if (document.error === true) {
			throw new Error(document.message);
		}
		this.redirect("/admin/votes");
	} else {
		throw new Error("Forbidden - You do not have sufficient priveldges!");
	}
};
