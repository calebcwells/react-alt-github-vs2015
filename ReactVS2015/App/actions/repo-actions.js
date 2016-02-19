var alt = require("../alt-app");
var request = require("superagent");

class RepoActions {
    search(searchText) {
        request.get("https://api.github.com/search/repositories")
            .query({ q: searchText })
            .send()
            .end((error, response) => {
                if (error) {
                    console.log(error);
                }
                this.actions.searchComplete(response.body.items);
            });
        this.dispatch();
    }

    searchComplete(repos) {
        this.dispatch(repos);
    }

    getDetails(owner, name) {
        request.get(`https://api.github.com/repos/${owner}/${name}`)
            .set("Accept", "application/vnd.github.v3+json")
            .send()
            .end((error, response) => {
                if (error) {
                    console.log(error);
                }

                console.log(response);
                this.actions.detailsReceived(response.body);
            });
        this.dispatch();
    }

    detailsReceived(repo) {
        this.dispatch(repo);
    }
}

module.exports = alt.createActions(RepoActions);