export const validarString = (string) => {
    console.log(`length del array: ${string.length}`)
    console.log(string)
    if(string.length === 1){
        console.log("SI")
        return "SI"
    }
    let ocurrencias = contarOcurrencias(string)
    console.log(ocurrencias)
    if(ocurrencias[0].apariciones===ocurrencias[ocurrencias.length -1].apariciones){
        console.log("SI")
        return "SI"
    }else if((ocurrencias[0].apariciones-ocurrencias[ocurrencias.length - 1].apariciones) > 1){
        console.log("NO");
        return "NO"
    }else if(ocurrencias[0].apariciones > ocurrencias[1].apariciones){
        console.log("SI")
        return "SI"
    }else{
        return "NO"
    }
} 

export const contarOcurrencias = (cadena)=>{
    let frecuencias = {}
    for(let letra of cadena){
        if(!frecuencias[letra]){
            frecuencias[letra] = 1
        }else{
            frecuencias[letra] += 1
        }
    }
    let arrayFrecuencias = []
    Object.keys(frecuencias).forEach((letra,index)=>{
        arrayFrecuencias.push({
            letra,
            apariciones:frecuencias[letra]
        });
    })
    return arrayFrecuencias.sort((a,b)=>{
        if(a.apariciones > b.apariciones){
            return -1
        }else{
            return 1
        }
    })
}
