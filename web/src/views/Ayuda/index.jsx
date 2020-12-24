import React from 'react'
import {Grid,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import TextoAyuda from '../../components/TextoAyuda'

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
            container 
            style={{
                backgroundColor:"#454545",
                height: "85vh"
            }} direction="row" justify="center"
        >
            <Grid 
                style={{
                    height:"75%",
                }}
                className={estilosAplicados.overflowGrid}
                direction="row" justify="center"
            >
                <TextoAyuda />
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