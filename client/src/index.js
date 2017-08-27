import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as reduxDevTools from 'redux-devtools';
import App from './containers/App';

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
