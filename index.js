let number = 8;

const mysqrt = (x) => {
    for (let i = 0; i * i <= x; i++) {
        if (i * i === x) {
            console.log(i);
            return i;
        }
    }
    return x;
}

console.log(mysqrt(number))