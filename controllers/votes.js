"use strict";

const themeModel = require("../models/theme");

module.exports.upvote = function* upvote() {
    if(this.params.id === null) {
        this.status = 400;
        return this.body = "Missing parameters!";
    }
}