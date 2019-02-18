// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './component/App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import EmployeeApp from './reducers/index';
import App from './component/App';



const store = createStore(EmployeeApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

