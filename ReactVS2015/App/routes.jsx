var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var Container = require("./components/container");
var Repos = require("./views/repos");
var RepoDetail = require("./views/repo-detail");

module.exports = (
	<Route handler={Container}>
		<Route name="repos" handler={Repos} path="/" />
		<Route name="repoDetails" handler={RepoDetail} path="/repo/:owner/:name" />
	</Route>	
)