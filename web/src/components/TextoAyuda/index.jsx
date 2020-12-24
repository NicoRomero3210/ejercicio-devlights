import React from 'react'

export default function TextoAyuda(){
    return(
        <>
            <h2 style={{
                    color:"white"
                }}>{`Para entender como hay que validar los strings primero
                    hay que saber que tenemos que ingresar una cadena con longitud menor a 1000000 caracteres.`

                }</h2>
                <h2 style={{
                    color:"white"
                }}>
                    {`Luego debemos ingresar solo letras, ademas debemos saber
                    que todas las letras deberian tenener la misma frecuencia, solo una podria diferir en 
                    su frecuencia y solo puede tener una diferencia de uno, es
                    decir, que si difiere en mas de una repeiticion con la frecuencia
                    minima, el resultado es negativo`}
                </h2>
                <h2 style={{
                    color:"white"
                }}>
                    {`Por ultimo, no se permite el ingreso de cadenas vacias para la validacion ni espacios en blanco entre caracteres`}
                </h2>
        </>
    )
}