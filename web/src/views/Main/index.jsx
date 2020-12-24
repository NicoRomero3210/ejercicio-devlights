import React,{useState} from 'react'
import Formulario from '../../components/Formulario'
import {validarString} from '../../functions/funciones'
import {Grid,Card,CardHeader} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const [cargando,setCargando] = useState(false)

    const estilosAplicados = estilos()
    const handleChangeInput = (data) => {
        setEntrada(data)
        console.log(entrada)
    }

    const validacion = async() => {
        if(entrada.length === 0 || entrada.length > Math.pow(10,5)){
            setPatronValido(false)
            return
        }
        const patron = new RegExp(/^[a-z]+$/g)
        const patronValidado = patron.test(entrada)
        if(patronValidado === true){
            setPatronValido(true)
            setCargando(true)
            const resultado = await validarString(entrada)
            setCargando(true)
            console.log(resultado)
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
        <Grid 
            container 
            style={{
                width:"100%",
                height: "85vh",
                backgroundColor: "#454545"
            }} 
            direction="row" 
            justify="center" 
            alignContent="center"
        >
            <Card className={estilosAplicados.anchos}>
                {cargando===true ? 
                (
                <Grid container direction="row" justify="cente" style={{height:"100%"}}>
                    <CircularProgress />
                </Grid>
                ) : 
                (
                <>
                    <Grid container direction="row" style={{height:"10%"}}>
                        <CardHeader title="Validar Cadena" />
                    </Grid>
                    <Formulario 
                        sacarError={sacarError} 
                        navegarAyuda={irAyuda} 
                        entrada={entrada} 
                        patronVal={patronValido} 
                        manejarEntrada={handleChangeInput} 
                        validar={validacion} 
                        color={patronValido===true ? 'primary' : 'secondary'}
                    />
                    </>
                )}           
            </Card>
        </Grid>
    )
}