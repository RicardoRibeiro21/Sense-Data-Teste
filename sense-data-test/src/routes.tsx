import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Description from './pages/Description';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home}  path="/" exact />  
            <Route path="/description" component={Description} ></Route>          
        </BrowserRouter>
    )
}

export default Routes;