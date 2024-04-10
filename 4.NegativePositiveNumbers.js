function negativePositiveNumbers(array) {
    finalArr = []
    //let newArr = array.sort();
    // for (let i=0; i<array.length; i++){
    //     let token = array[i];
    //     if (token === Math.min(array)){
    //         newArr.push(token);
    //     }
    // return newArr.join(`\n`);
    for (let i = 0; i < array.length; i++) {
        let el = Number(array[i]);
        if (el < 0) {
            finalArr.unshift(el);
        } else if (el >= 0) {
            finalArr.push(el);
        }
    }

    return finalArr.join(`\n`);
}
console.log(negativePositiveNumbers([3, -2, 0, -1]));