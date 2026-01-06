function fib(a){
    const numbers = [0, 1];
    if(a==1) return [0];
    for(let i=2; i<a; i++){
        numbers.push(numbers[i-2]+numbers[i-1]);
    }
    return numbers;
}

function fibrec(a){
    if(a==1) return [0];
    if(a==2) return [0,1];

    const numbers = fibrec(a-1);
    numbers.push(numbers.at(-2) + numbers.at(-1));
    return numbers;
}


console.log(fib(8));