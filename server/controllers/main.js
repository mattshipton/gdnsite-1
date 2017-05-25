"use strict";

const config = require("../../config.json");
const db = require("../helpers/db");
const common = require("../helpers/common");

/**
* GET '/join'
* @returns {link} gdn discord
*/
module.exports.join = function join() {
	this.redirect("https://discord.gg/sWsrrJQ");
};

/**
* GET '/'
* @returns {link} icth.io gamejam page
*/
module.exports.jam = function jam() {
	let user = null;
	if (this.isAuthenticated()) {
		user = common.getPermissions(this.session.passport.user);
	}
	this.redirect("https://itch.io/jam/game-dev-network-blueberry-jam");
};
