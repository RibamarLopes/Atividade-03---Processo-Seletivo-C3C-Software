function triangulo(lado1,lado2,lado3){
    
    let l1=lado1;
    let l2=lado2;
    let l3=lado3;

    if (l1<(l2+l3)&&l2<(l1+l3)&&l3<(l1+l2)){
        if (l1==l2&&l1==l3){
            return "Triângulo equilátero"
        }else if((l1==l2&&l1!=l3)||(l1==l3&&l1!=l2)){
            return "Triângulo isóceles"
        }else{
            return "Triângulo escaleno"
        }
    }else{
        return "Não é triângulo"
    }
}