import React,{useState} from 'react'
import Formulario from '../../components/Formulario'
import {validarString} from '../../functions/funciones'
import {Grid,Card,CardHeader} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

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
          height: '90%'
        },
    },
}))

export default function Main(props){
    const [entrada,setEntrada] = useState("")
    const [patronValido,setPatronValido] = useState(true)
    const estilosAplicados = estilos()
    const handleChangeInput = (data) => {
        setEntrada(data)
        console.log(entrada)
    }

    const validacion = () => {
        if(entrada.length === 0){
            setPatronValido(false)
        }
        const patron = new RegExp(/^[a-z]+$/g)
        const patronValidado = patron.test(entrada)
        if(patronValidado === true){
            setPatronValido(true)
            const resultado = validarString(entrada)
            console.log(resultado)
            console.log(props)
            props.history.push(`/resultado/${resultado}`)
        }else{
            setPatronValido(false)
        }
        
    }
    const sacarError = () => {
        setPatronValido(true)
    }
    const irAyuda = () => {
        props.history.push('/ayuda')
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
                    <Formulario sacarError={sacarError} navegarAyuda={irAyuda} entrada={entrada} patronVal={patronValido} manejarEntrada={handleChangeInput} validar={validacion} color={patronValido===true ? 'primary' : 'secondary'}/>            
            </Card>
        </Grid>
    )
}