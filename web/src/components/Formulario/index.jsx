import React from 'react'
import {Grid,Card,CardHeader,Button,TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const estilos = makeStyles((theme) => ({
    anchos: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '100%',
            overflow: "scroll"
        },
        [theme.breakpoints.down('sm')]: {
          width: '80%',
          height: '80%'
        },
        [theme.breakpoints.up('sm')]: {
          width: '70%',
          height: '65%'
        },
    },
    margenCard:{
        margin: "auto"
    }
  }));

export default function Formulario(props){
    const estilosAplicados = estilos()
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
    const enfocarInput = () => {
        props.sacarError()
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
            <Card className={estilosAplicados.anchos}>
                <Grid container direction="row" style={{height:"10%"}}>
                    <CardHeader title="Validar Cadena" />
                </Grid>
                {props.patronVal === true ? null :
                    <Grid style={{height:"10%"}} container direction="row" justify="center" xs={12} alignItems="center">
                        <p style={{color: 'red'}}>Error, cadena incorrecta, ver seccion ayuda para ver como son las cadenas validas</p>
                    </Grid>
                }
                <Grid style={{height:"40%",marginTop:15}} container direction="row" justify="center" xs={12} alignItems="center">
                    <TextField error={!props.patronVal} label="Ingresar Cadena" variant="outlined"onChange={enviarDatos} onFocus={enfocarInput}/>
                </Grid>
                <Grid container direction="row" justify="center">
                    <Button variant="contained" disableElevation onClick={manejarValidacion} style={{marginTop:10}}>
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