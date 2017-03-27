"use strict";

const adminPermission = 1341520961;

module.exports.index = function* index() {
	let user = null;
	if (this.isUnauthenticated()) {
		this.redirect("/login");
	}
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	for (const guild of user.guilds) {
		if (guild.name === "Game Dev Network" && (guild.permissions === adminPermission
			|| guild.owner === true)) {
			yield this.render("admin/index", {
				user: user
			});
		} else {
			throw new Error("Forbidden - You do not have sufficient priveldges!");
		}
	}
};
