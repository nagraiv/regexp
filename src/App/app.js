import Validator from "./Validator/Validator";
import phoneFormatter from "./Finctions/phoneFormatter";

console.log('application started');

console.log(Validator.validateUsername('nj12hj34b-hj456b'));

console.log(phoneFormatter('8 (927) 000-00-00'));

console.log(phoneFormatter('+7 960 000 00 00'));

console.log(phoneFormatter('+86 000 000 0000'));

try {
    console.log(phoneFormatter('+55555'));
} catch (e) {
    console.error(e.message);
}
