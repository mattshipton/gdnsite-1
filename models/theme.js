"use strict";

module.exports = {
    newTheme: (name) => {
        const theme = {
            error: false,
            name: name,
            votes: 0,
            voters: []
        }
        return theme;
    },
    addVote: (theme, voter) => {
        theme.votes++;
        theme.voters.push(voter);
        return theme;
    }
}