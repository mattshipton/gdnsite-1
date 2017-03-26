"use strict";

module.exports = {
    sortbyVotes: (themes) => {
        return themes.sort((a,b) => {
            return b.value.votes - a.value.votes;
        });
    }
}