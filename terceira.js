function avaliacao(nota){
        
    let n = nota;
    let quociente = parseInt(n/5)
    let resto = n%5;
    
    if(n >= 0 && n <= 100){
        if(n>37){
            if(resto>2){
                console.log ("Sua nota é "+((quociente+1)*5))
            }else{
                console.log ("Sua nota é "+n)
            }
        }else
            return "Reprovado"
    }else
        return "Não é uma nota válida!"
}