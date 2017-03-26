"use strict";

const db = require("../helpers/db");
const themeModel = require("../models/theme");

let user;

module.exports.upvote = function* upvote() {
    if(this.params.id === null) {
        throw new Error("Missing parameters!");
    }
    if (this.isAuthenticated()) {
        user = this.session.passport.user;
    }
    // if (this.isUnauthenticated()) {
    //     throw new Error("You must be authenticated to perform this action!");
    // }
    let theme = yield db.getDocument(this.params.id, "themes");
    if(~theme.voters.indexOf(`${user.username}#${user.discriminator}`)) {
        return this.redirect("/vote");
    }
    theme = themeModel.addVote(theme, `${user.username}#${user.discriminator}`);
    const result = yield db.saveDocument(theme, "themes");
    this.body = result;
    return this.redirect("/success");
}

module.exports.themes = function* themes() {
    const params = this.request.body;
    if (this.isUnauthenticated()) {
        throw new Error("You must be authenticated to perform this action!");
    }
    if(!params.theme_name) {
        throw new Error("You must supply a theme name!");
    }
    const theme = themeModel.newTheme(params.theme_name);
    const result = yield db.saveDocument(theme, "themes");
    this.body = result;
    return this.redirect("/success");
}