"use strict";
const config = require("../config.json");

const moment = require("moment-timezone");

module.exports = {
    newError: (message, user) => {
        const err = {
            error: false,
            message: message,
            user: user,
            dateTime: moment().tz(config.site.timezone).format("llll")
        };
        return err;
    }
};