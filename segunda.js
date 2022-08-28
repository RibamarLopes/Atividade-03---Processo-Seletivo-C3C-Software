function bhaskara(ax,bx,cx){
            
    let a=ax;
    let b=bx;
    let c=cx;
    let delta = b**2 - 4*a*c
    let r1 = (-b+Math.sqrt(delta))/(2*a)
    let r2 = (-b-Math.sqrt(delta))/(2*a)

    if (delta<0) {
        return "Delta é negativo"
    } else {
        console.log("As raizes são "+r1+" e "+r2)
    }
}