import Validator from "./Validator/Validator";
console.log('application started');

console.log(Validator.validateUsername('L'));
console.log(Validator.validateUsername('Li'));
console.log(Validator.validateUsername('1L'));
console.log(Validator.validateUsername('L-'));
console.log(Validator.validateUsername('A-r'));
console.log(Validator.validateUsername('c-R'));
console.log(Validator.validateUsername('rhugweb______nklgjwbnl'));
console.log(Validator.validateUsername('s123f'));
console.log(Validator.validateUsername('f1234h'));
console.log(Validator.validateUsername('nj12hj34b-hj456b'));
