import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);