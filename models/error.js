"use strict";
const config = require("../config.json");

const moment = require("moment-timezone");
const Chance = require("chance");
const chance = new Chance();

module.exports = {
    newError: (message, user) => {
        const err = {
            error: false,
            id: chance.guid(),
            message: message,
            user: user,
            dateTime: moment().tz(config.site.timezone).format("llll")
        };
        return err;
    }
};