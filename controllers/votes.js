"use strict";

const db = require("../helpers/db");
const themeModel = require("../models/theme");

module.exports.upvote = function* upvote() {
    if(this.params.id === null) {
        throw new Error("Missing parameters!");
    }
}

module.exports.themes = function* themes() {
    const params = this.request.body;
    if (this.isAuthenticated()) {
        //do magic here
    }
    if(!params.theme_name) {
        throw new Error("You must supply a theme name!");
    }
    const theme = themeModel.newTheme(params.theme_name);
    const result = yield db.saveDocument(theme, "themes");
    this.body = result;
    return this.redirect("/success");
}