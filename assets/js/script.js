let num = parseInt(prompt("Ingrese un número entre 1 y 20"));
if (num < 1 || num > 20){
    console.log("Número fuera de rango");
}

for(let i = 1; i<=num;i++){
    let resultado = i * num;
    console.log(`${i} x ${num} = ${resultado}`);
}

for(let i = 1; i <= num; i++){
    let res = 1;
    for(let j = 1; j <= i; j++){
        res = res * j;
    }
    console.log(`Factorial de ${i} es: ${res}`);
}