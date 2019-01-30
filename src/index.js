import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

import App from './components/App'
import Dashboard from './components/dashboard/index'
import Library from './components/libraries/index'
import UserManager from './components/user-manager/index'
import CompetencyManager from './components/competency-manager/index'
import CurriculumManager from './components/curriculum-manager/index'
import ScheduleManager from './components/schedule-manager/index'
import Results from './components/results/index'
import Announcements from './components/announcements/index'

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path="/" exact component={Dashboard} />
            <Route path="/libraries"  component={Library} />
            <Route path="/user-manager"  component={UserManager} />
            <Route path="/competency-manager"  component={CompetencyManager} />
            <Route path="/curriculum-manager"  component={CurriculumManager} />
            <Route path="/schedule-manager"  component={ScheduleManager} />
            <Route path="/results"  component={Results} />
            <Route path="/announcements"  component={Announcements} />
        </App>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
