/*********************
Prime Number Chacking
*********************/
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const primeNumber = isPrime(11);
console.log(primeNumber);