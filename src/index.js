import React from 'react';
import ReactDOM from 'react-dom';
import './KittenKata.scss';
import KittenKata from './KittenKata';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<KittenKata />, 
	document.getElementById('root')
);
registerServiceWorker();
