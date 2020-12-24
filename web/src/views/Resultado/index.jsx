import React,{useState} from 'react'
import Formulario from '../../components/Formulario'
import {Grid,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

export default function Resultado(props){

    return(
        <Grid container direction="row" justify="center">
            <Grid container direction="row" justify="center">
                <h1>Tu cadena es valida? {props.match.params.resultado}</h1>          
            </Grid>
            <Grid container direction="row" justify="center">
                <Button onClick={()=>{props.history.push('/')}} variant="contained" disableElevation={true}>
                    <p>Volver</p>
                </Button>          
            </Grid>
        </Grid>
    )
}