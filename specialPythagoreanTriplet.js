function specialPythagoreanTriplet(n) {
    let a, b, c;

    for(a = 1; a < n; a++) {
        b = getOpposite(a, n);
        c = getC(a, b, n);

        if(isInt(b) && c >= 4) {
            return a * b * c;
        }
    }
}

function getOpposite(len, n) {
    // Solution to a^2 + b^2 - c^2 = 0
    // Where c = (n - a - b)
    // And len is either a or b

    return ((2*len - n) * n) / (2*(len - n));
}

function getC(a, b, n) {
    return n - a - b;
}

function isInt(num) {
    return num === Math.floor(num);
}

console.log(specialPythagoreanTriplet(1000));
