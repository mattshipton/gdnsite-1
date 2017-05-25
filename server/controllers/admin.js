"use strict";
const db = require("../helpers/db");
const common = require("../helpers/common");

/**
* GET '/admin'
* @returns {view} admin/index.hbs - Returns user to the admin page
*/
module.exports.index = function index() {
	let user = null;
	if (this.isUnauthenticated()) {
		this.redirect("/login");
	}
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	if (! user.admin) {
		throw new Error("Forbidden - You do not have sufficient priveldges!");
	} else {
		return this.body = user;
	}
};

/**
* GET '/admin/votes'
* @returns {view} admin/vote.hbs - Returns user to the admin vote page
*/
module.exports.votes = function* votes() {
	let user = null;
	if (this.isUnauthenticated()) {
		this.redirect("/login");
	}
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	if (!user.admin) {
		throw new Error("Forbidden - You do not have sufficient priveldges!");
	} else {
		let data = yield db.runView("themes/all", null, "themes");
		data = common.sortbyVotes(data.results);
		return this.body = {
			user: user,
			themes: data
		};
	}
};

/**
* GET '/votes/remove/:id'
* @param {string} id - the id of the theme to delete
* @returns {view} admin/votes.hbs - Returns user to the admin vote page
*/
module.exports.removeTheme = function* removeTheme() {
	let user = null;
	if (this.isUnauthenticated()) {
		this.redirect("/login");
	}
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	if (this.params.id === null) {
		throw new Error("Missing parameters!");
	}
	if (!user.admin) {
		throw new Error("Forbidden - You do not have sufficient priveldges!");
	} else {
		const document = yield db.removeDocument(this.params.id, "themes");
		if (document.error === true) {
			throw new Error(document.message);
		}
		return this.body = document;
	}
};
