import React from 'react'
import {Grid,Button,TextField} from '@material-ui/core'
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
          height: '50%'
        },
    },
    margenCard:{
        margin: "auto"
    },
    anchosBotones:{
        [theme.breakpoints.up('sm')]: {
            width: '30%',
            height: '30%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30%',
            height: '30%',
        },
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
        <>
            {props.patronVal === true ? null :
                <Grid style={{height:"10%"}} container direction="row" justify="center" xs={12} alignItems="center">
                    <p style={{color: 'red'}}>Error, cadena incorrecta, ver seccion ayuda para ver como son las cadenas validas</p>
                </Grid>
            }
            <Grid style={{height:"40%",marginTop:15}} container direction="row" justify="center" xs={12} alignItems="center">
                <TextField error={!props.patronVal} label="Ingresar Cadena" variant="outlined"onChange={enviarDatos} onFocus={enfocarInput}/>
            </Grid>
            <Grid container direction="row" justify="center" style={{width:"100%"}}>
                <Button className={estilosAplicados.anchosBotones} variant="contained" disableElevation onClick={manejarValidacion} style={{marginTop:10}}>
                    <p>Validar!</p>
                </Button>
            </Grid>
            <Grid container direction="row" justify="center" style={{marginTop: 10,marginBottom:10,width:"100%"}}>
                <Button className={estilosAplicados.anchosBotones} variant="contained" disableElevation onClick={irAyuda}>
                    <p>Ayuda</p>
                </Button>
            </Grid>
        </>
    )
}