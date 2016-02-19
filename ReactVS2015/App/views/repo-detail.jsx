var React = require("react");
var Link = require("react-router").Link;
var State = require("react-router").State;
var RepoStore = require("../stores/repo-store");
var RepoActions = require("../actions/repo-actions");

module.exports = React.createClass({
	mixins: [State],
	getInitialState() {
		return RepoStore.getState();
	},
	componentWillMount() {
		var params = this.getParams();
		RepoActions.getDetails(params.owner, params.name);

		RepoStore.listen(this.onChange);
	},
	componentWillUnmount() {
		RepoStore.unlisten(this.onChange);
	},
	onChange(){
		this.setState(RepoStore.getState());
	},
	render() {
		return (
			<div id="repo-details">
				<Link to="repos">Back</Link>
				<div className="animated bounceInRight">
					<div className="page-header">
						<h1>{ this.state.repo.name }</h1>
					</div>
					<a href={ this.state.repo.html_url } target="_blank">{ this.state.repo.html_url }</a>
					<h4>{ this.state.repo.description}</h4>
					<ul className="collection">
						<li className="collection-item">
							Forks
							<span className="badge">
								{ this.state.repo.forks }
								<em className="fa fa-code-fork"></em>
							</span>
						</li>
						<li className="collection-item">
							Issues
							<span className="badge">
								{ this.state.repo.open_issues }
								<em className="fa fa-exclamation-circle"></em>
							</span>
						</li>
						<li className="collection-item">
							Watchers
							<span className="badge">
								{ this.state.repo.watchers }
								<em className="fa fa-eye"></em>
							</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
});