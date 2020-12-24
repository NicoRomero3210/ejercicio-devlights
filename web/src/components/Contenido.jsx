import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Main from '../views/Main'
import Ayuda from '../views/Ayuda'
import Resultado from '../views/Resultado'

export default function Contenido(props){
    return(
        <Switch>
            <Route exact path="/" render={(props)=>(<Main {...props}/>)} />
            <Route exact path="/ayuda" render={(props)=>(<Ayuda {...props}/>)} />
            <Route exact path="/resultado/:resultado" render={(props)=>(<Resultado {...props}/>)} />
        </Switch>
    )
}