import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Admin from './admin'


export default class ERouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/" render={() =>
                        <Admin>
                        </Admin>
                    }/>
                </App>
            </HashRouter>
        );
    }
}