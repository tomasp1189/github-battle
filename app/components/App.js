import React from 'react';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />       
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/battle' component={Battle} />
                        <Route path='/popular' component={Popular} />
                        <Route render={function(){
                            return (<p>Not Found</p>)
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;