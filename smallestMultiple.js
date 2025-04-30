function smallestMultiple(number, start = number){
    
    let flag = true;
    for(let index = 1; index <= start; index++){
        if(number % index !== 0) {
            flag = false;
            break;
        }
    }
    if(flag) return number
    else return smallestMultiple(number+start, start)
}
console.log(smallestMultiple(10))