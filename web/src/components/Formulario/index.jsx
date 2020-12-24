import React from 'react'
import {Grid,Card,CardHeader,Button,TextField} from '@material-ui/core'

export default function Formulario(props){
    const enviarDatos = (event)=>{
        const {value} = event.target
        props.manejarEntrada(value)
    }
    const manejarValidacion = () => {
        props.validar()
    }
    const irAyuda = () => {
        props.navegarAyuda()
    }

    return(
        <Grid container style={
            {
                width:"100%",
                height: "85vh",
                backgroundColor: "#454545"
            }
            } 
            direction="row" 
            justify="center" 
            alignContent="center"
        >
            <Card style={{width:"40%",height:430,margin:"auto"}}>
                <Grid container direction="row" style={{height:"20%"}}>
                    <CardHeader title="Validar Cadena" />
                </Grid>
                {props.patronVal === true ? null :
                    <Grid style={{height:"10%"}} container direction="row" justify="center" xs={12} alignItems="center">
                        <p style={{color: 'red'}}>Error, ingresar solo letras y tal vez la longitud de la cadena es mayor a 100000 o su cadena no tiene contenido</p>
                    </Grid>
                }
                <Grid style={{height:"40%"}} container direction="row" justify="center" xs={12} alignItems="center">
                    <TextField error={!props.patronVal} label="Ingresar Cadena" variant="outlined"onChange={enviarDatos}/>
                </Grid>
                <Grid container direction="row" justify="center">
                    <Button variant="contained" disableElevation onClick={manejarValidacion}>
                        <p>Validar!</p>
                    </Button>
                </Grid>
                <Grid container direction="row" justify="center" style={{marginTop: 10,marginBottom:10}}>
                    <Button variant="contained" disableElevation onClick={irAyuda}>
                        <p>Ayuda</p>
                    </Button>
                </Grid>
            </Card>
        </Grid>
    )
}