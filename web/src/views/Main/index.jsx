import React,{useState} from 'react'
import {Grid,Card,CardHeader,Button,TextField} from '@material-ui/core'
import Formulario from '../../components/Formulario'
import {validarString} from '../../functions/funciones'

export default function Main(props){
    const [entrada,setEntrada] = useState("")
    const [patronValido,setPatronValido] = useState(true)
    
    const handleChangeInput = (data) => {
        setEntrada(data)
        console.log(entrada)
    }

    const validacion = () => {
        if(entrada.length === 0){
            setPatronValido(false)
            //props.history.push(`/resultado/NO`)
        }
        const patron = new RegExp(/^[A-Za-z]+$/g)
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
    const irAyuda = () => {
        props.history.push('/ayuda')
    }

    return(
        <>
            <Formulario navegarAyuda={irAyuda} entrada={entrada} patronVal={patronValido} manejarEntrada={handleChangeInput} validar={validacion} color={patronValido===true ? 'primary' : 'secondary'}/>            
        </>
    )
}