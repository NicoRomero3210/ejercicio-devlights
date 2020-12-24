import React from 'react'
import {Grid,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const estilos = makeStyles(theme=>({
    margenTexto:{
        [theme.breakpoints.down('sm')]:{
            marginLeft: 10
        }
    }
}))

export default function Resultado(props){
    const estilosAplicados = estilos()

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
            <Grid container direction="row" justify="center">
                <h1 className={estilosAplicados.margenTexto} style={{color:"white"}}>Tu cadena es valida? {props.match.params.resultado}</h1>          
            </Grid>
            <Grid container direction="row" justify="center">
                <Button onClick={()=>{props.history.push('/')}} variant="contained" disableElevation={true}>
                    <p>Volver</p>
                </Button>          
            </Grid>
        </Grid>
    )
}