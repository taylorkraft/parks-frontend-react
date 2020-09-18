import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'

import usStateReducer from './reducers/usStateReducer'
import App from './App'

const store = createStore(usStateReducer, applyMiddleware(thunk))

// any component that we wrap in provider, as well as it's child components - has access to our redux store
// any component that we wrap in router, as well as it's child components - now has access to setting up routes/links

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

