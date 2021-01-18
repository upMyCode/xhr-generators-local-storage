const age = 21;
localStorage.setItem('number',age.toString())
console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
localStorage.clear();
console.log(localStorage.getItem('number'));

