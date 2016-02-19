var React = require("react");
var RepoCard = require("./repo-card");
var request = require("superagent");
var ReposStore = require("../stores/repos-store");
var RepoActions = require("../actions/repo-actions");

module.exports = React.createClass({
	getInitialState(){
		return ReposStore.getState();
	},
	componentWillMount(){
		ReposStore.listen(this.onChange)
	},
	componentWillUnmount(){
		ReposStore.unlisten(this.onChange)
	},
	onChange(){
		this.setState(ReposStore.getState())
	},
	search(e) {
		e.preventDefault();
		var searchText = React.findDOMNode(this.refs.searchText).value;

		RepoActions.search(searchText);
	},
	renderLoading() {
		if (!this.state.loading) {
			return
		} else {
			return (
				<div className="progress blue darken-2">
					<div className="indeterminate blue lighten-3"></div>
				</div>
			)
		}
	},
	renderRepos() {
		return this.state.repos.map((repo) => {
			return (
				<RepoCard repo={repo}/>
			)
		})		
	},
	render() {
		return (
				<div>
					<form onSubmit={this.search}>
						<div className="input-field">
							<input type="text" placeholder="Search Github Repos" ref="searchText" />
						</div>
					</form>

					{ this.renderLoading() }

					<div className="row">
						{ this.renderRepos() }
					</div>
				</div>
		)
	}
});