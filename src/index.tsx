import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, SignIn } from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store'

ReactDOM.render(
<React.StrictMode>
  <Provider store = {store}>
    <Router>
      <Switch>

          <Route exact path='/'>
            <Home title={'Hero Favorites'}/>
          </Route>

          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>

          <Route path='/signin'>
            <SignIn></SignIn>
          </Route>

        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
