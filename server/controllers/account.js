"use strict";

const config = require("../../config.json");
const common = require("../helpers/common");

module.exports.logout = function logout() {
	this.logout();
	this.redirect("/");
};
