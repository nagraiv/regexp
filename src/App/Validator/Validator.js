
export default class Validator {
    static validateUsername(nameStr) {
        return /^[a-z]((?!\d{4})[\w-])*[a-z]$/i.test(nameStr);
    }
}