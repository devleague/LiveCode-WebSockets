import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import * as reduxDevTools from 'redux-devtools';
import App from './containers/App';
import Lobby from './containers/Lobby';
import Room from './containers/Room';
import logo from './logo.svg';

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Websockets Demo</h2>
        </div>
        <div className="App-intro">
          <Route exact path="/" component={App} />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/room" component={Room} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
