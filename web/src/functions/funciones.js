export const validarString = (string) => {
    return new Promise((res,rej)=>{
        try{    
            if(string.length === 1){
                console.log("SI")
                res("SI")
            }
            let ocurrencias = contarOcurrencias(string)
            if(ocurrencias[0].apariciones===ocurrencias[ocurrencias.length -1].apariciones){
                res("SI")
            }else if((ocurrencias[0].apariciones-ocurrencias[ocurrencias.length - 1].apariciones) > 1){
                res("NO")
            }else if(ocurrencias[0].apariciones > ocurrencias[1].apariciones){
                res("SI")
            }else{
                res("NO")
            }
        }catch(e){
            rej(e)
        }
    })
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
