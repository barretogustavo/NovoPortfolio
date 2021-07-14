import React from 'react'
import {Switch} from 'react-router-dom'
import RouterHandler from './Components/RouterHandlers'
import Home from './pages/home'

export default()=> {
    return( 
    <Switch>
        <RouterHandler path="/">
            <Home />
        </RouterHandler>
    </Switch>)
}