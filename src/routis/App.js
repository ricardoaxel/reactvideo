import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Home from '../Containers/Home';
import Login from '../Containers/Login';
import NotFound from '../Containers/NotFound';
import Register from '../Containers/Register';


const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route component={NotFound} />
            </Switch> 
        </Layout>
    </BrowserRouter>
)

export default App;