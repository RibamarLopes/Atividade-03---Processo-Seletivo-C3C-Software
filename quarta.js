function luidyMoura(luidyMoura){
    
let lm = luidyMoura;
    for (let i = 1; i <=lm; i++){
        if (i % 5 === 0 && i % 9 === 0){
            console.log ("LuidyMoura")
        }else if (i % 5 === 0){
            console.log ("Luidy")
        }else if (i % 9 === 0){
            console.log ("Moura")
        }else if (i % 5 != 0 && i % 9 != 0){
            console.log (i)
        }
    }
}