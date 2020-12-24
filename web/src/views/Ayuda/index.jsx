import React from 'react'
import {Grid,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const estilos = makeStyles((theme) => ({
    heightBotonGrid: {
      [theme.breakpoints.down('sm')]: {
        height: '15%',
        width: '50%'
      },
      [theme.breakpoints.up('sm')]: {
        height: '5%'
      },
      [theme.breakpoints.up('lg')]: {
        height: '5%',
        width: '10%'
      },
    },
    widthBoton: {
        [theme.breakpoints.down('sm')]: {
            width: '50%'
        },
        [theme.breakpoints.up('sm')]: {
            width: '20%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '20%'
        },
      },
    overflowGrid:{
        [theme.breakpoints.up('sm')]:{
            overflow: "hidden"
        },
        [theme.breakpoints.down('sm')]:{
            overflow: "scroll"
        }
    }
  }));

export default function Ayuda(props){
    const estilosAplicados = estilos()
    return(
        <Grid 
            container style={{
                backgroundColor:"#454545",
                height: "85vh"
            }} direction="row" justify="center"
        >
            <Grid style={{
                height:"75%",
                }}
                className={estilosAplicados.overflowGrid}
                direction="row" justify="center"
            >
                <h2 style={{
                    color:"white"
                }}>{`Para entender como hay que validar los strings primero
                    hay que saber que tenemos que ingresar una cadena con longitud menor a 1000000 caracteres.`

                }</h2>
                <h2 style={{
                    color:"white"
                }}>
                    {`Luego debemos ingresar solo letras, y por ultimo debemos entender
                    que todas las letras deberian tenener la misma frecuencia, solo una podria diferir en 
                    su frecuencia y solo puede tener una diferencia de uno, es
                    decir, que si difiere en mas de una repeiticion con la frecuencia
                    minima, el resultado es negativo`}
                </h2>
                <h2 style={{
                    color:"white"
                }}>
                    {`Por ultimo, no se permite el ingreso de cadenas vacias para la validacion`}
                </h2>
            </Grid>
            <Grid container className = {estilosAplicados.heightBotonGrid} direction="row" justify="center">
                <Button className={estilosAplicados.widthBoton}
                variant="contained" disableElevation onClick={()=>{props.history.push('/')}}>
                    <p>Volver</p>
                </Button>
            </Grid>
        </Grid>
    )
}