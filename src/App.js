import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
	return (
		// BEM - a sweet method of naming classes in react

		// Use React Router to navigate through the various pages
		<Router>
			<div className="app">
				{/* render the header component in any other component */}
				<Header />

				<Switch>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
