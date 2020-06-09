/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import './example.less';

import Creatable from './components/Creatable';
import Contributors from './components/Contributors';
import GithubUsers from './components/GithubUsers';
import CustomComponents from './components/CustomComponents';
import CustomRender from './components/CustomRender';
import Multiselect from './components/Multiselect';
import NumericSelect from './components/NumericSelect';
import BooleanSelect from './components/BooleanSelect';
import Virtualized from './components/Virtualized';
import States from './components/States';

ReactDOM.render(
	<div>
		<Multiselect label="Multiselect" />
		<Multiselect label="Multiselect" />
		<States label="States" searchable />
		<Virtualized label="Virtualized" />
		<Contributors label="Contributors (Async)" />
		<GithubUsers label="GitHub users (Async with fetch.js)" />
		<NumericSelect label="Numeric Values" />
		<BooleanSelect label="Boolean Values" />
		<CustomRender label="Custom Render Methods"/>
		<CustomComponents label="Custom Placeholder, Option, Value, and Arrow Components" />
		<Creatable
			hint="Enter a value that's NOT in the list, then hit return"
			label="Custom tag creation"
		/>
	</div>,
	document.getElementById('example')
);
