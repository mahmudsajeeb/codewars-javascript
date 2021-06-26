
const Abbreviate = name=> name.split().map(v => v[0].toUpperCase()).join(' ')
// return name.split(' ').map(v => v[0].toUpperCase()).join('.');
console.log(Abbreviate("Sajib", "Mahmud"))

const Abbreviates = name => name.split(' ').map(v => v[0]).toUpperCase()

console.log(Abbreviate('Mahmud Sajib'))