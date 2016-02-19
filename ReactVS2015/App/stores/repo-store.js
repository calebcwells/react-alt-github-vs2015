var alt = require("../alt-app");
var RepoActions = require("../actions/repo-actions");

class RepoStore {
    constructor() {
        this.repo = {};

        this.bindAction(RepoActions.getDetails, this.onGetDetails);
        this.bindAction(RepoActions.detailsReceived, this.onDetailsReceived);
    }

    onGetDetails() {
        this.repo = {};
    }

    onDetailsReceived(repo) {
        this.repo = repo;
    }
}

module.exports = alt.createStore(RepoStore);