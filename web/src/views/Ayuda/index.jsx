import React from 'react'
import {Grid,Button} from '@material-ui/core'

export default function Ayuda(props){
    return(
        <Grid 
            container style={{
                backgroundColor:"#454545",
                height: "85vh"
            }} direction="row" justify="center"
        >
            <Grid style={{
                height:"80%"
                }}
                direction="row" justify="center"
            >
                <h2 style={{
                    color:"white"
                }}>{`Para entender como hay que validar los strings primero
                    hay que saber que tenemos que ingresar un caracter con longitud menor a 1000000.`

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
            </Grid>
            <Grid container style={{
                height:"10%",
            }} direction="row" justify="center">
                <Button style={{
                    heigth:"100%"
                }} variant="contained" disableElevation onClick={()=>{props.history.push('/')}}>
                    <p>Volver</p>
                </Button>
            </Grid>
        </Grid>
    )
}