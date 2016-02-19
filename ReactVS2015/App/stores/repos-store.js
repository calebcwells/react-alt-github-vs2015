var alt = require("../alt-app");
var RepoActions = require("../actions/repo-actions");

class ReposStore {
    constructor() {
        this.loading = false;
        this.repos = [];

        this.bindAction(RepoActions.search, this.onSearch);
        this.bindAction(RepoActions.searchComplete, this.onSearchComplete);
    }

    onSearch() {
        this.repos = [];
        this.loading = true;
    }

    onSearchComplete(repos) {
        this.loading = false;
        this.repos = repos;
    }
}

module.exports = alt.createStore(ReposStore);