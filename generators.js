function* newGenerator () {
    yield 'Ja'
    yield 'va'
    yield 'Sc'
    yield  'ript'
}


const str  = newGenerator();

console.log(str.next()) // { value: 'Ja', done: false }

console.log(str);// Object [Generator] {}



