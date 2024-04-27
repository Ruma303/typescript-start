//, Type annotation
function add(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
//, Parametri Default
function profile(name, age) {
    if (age === void 0) { age = 20; }
    return "Name: ".concat(name, ", Age: ").concat(age);
}
console.log(profile('Mario'));
// Name: Mario, Age: 20
//, Parametri opzionali
function sum(x, y) {
    return y ? x + y : x;
}
console.log(sum(10)); // 10
