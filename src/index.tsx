import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'src/sagas';
import DashBoard from './components/App/DashBoard';
import { StylesProvider } from '@material-ui/styles';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <BrowserRouter>
        <DashBoard />
      </BrowserRouter>
    </StylesProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
