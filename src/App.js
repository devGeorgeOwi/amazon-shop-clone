import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
	return (
		// BEM - a sweet method of naming classes in react
		<div className="app">
			<Header />
			<Home />
			{/* Home */}
		</div>
	);
}

export default App;
