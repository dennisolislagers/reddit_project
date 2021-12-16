import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Subreddit from "./pages/subreddit/Subreddit";
import { Route, NavLink, Switch, } from "react-router-dom";


function App () {
    return (
        <div>
            <NavLink to='/'/>
            <NavLink to='/subreddit'/>
                <Switch>
                    <Route exact path="/"><Homepage /></Route>
                    <Route path="/subreddit/:id"><Subreddit /></Route>
                </Switch>
        </div>
    );
}

export default App;