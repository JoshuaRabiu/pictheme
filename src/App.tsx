import * as React from 'react';
import './App.css';
import Home from './containers/Home';
import { Info } from './components/Info';
import { Switch, Route, Link } from 'react-router-dom';

export const App = (): any => {
	return (
		<div>
			<Link to="/" target="_self">
				<h1 className="heading">PicTheme </h1>
			</Link>
			<Link to="/info">
				<h1 className="heading info-link">Info</h1>
			</Link>
			<Switch>
				<Route exact={true} path="/" component={Home} />
				<Route path="/info" component={Info} />
			</Switch>
		</div>
	);
};
