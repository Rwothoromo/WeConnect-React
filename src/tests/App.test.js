import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import apiUrl from '../App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
	expect(apiUrl).toBe('http://127.0.0.1:5000/api/v2');
});
