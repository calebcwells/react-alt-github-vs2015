var React = require("react");
var Header = require("./header");
var RouteHandler = require("react-router").RouteHandler;

module.exports = React.createClass({
    render() {
    	return (
		<div>
			<Header />
			<div className="container">
				<RouteHandler />
			</div>
		</div>
		)
    }
})