import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function playlist (state = [], action){
	if ( action.type === "ADD_TRACK" ) {
		return [
			...state,
			action.payload
		];
	}
	return state;
}

const store = createStore(playlist);

store.subscribe(()=>{
	console.log('subscribe', store.getState());
});

store.dispatch({
	type:'ADD_TRACK',
	payload:'La la la',
});


ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>,
	document.getElementById('root')
);

