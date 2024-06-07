
export default function phoneFormatter(inputPhone) {
    const filteredPhone = inputPhone.replace(/[- ()]/g, '');
    if (/[^+]\D/.test(filteredPhone)) {
        throw new Error('Посторонние символы в номере телефона!');
    }
    if (!/^(8|\+\d)\d{10,}/.test(filteredPhone)) {
        throw new Error('В номере телефона должно быть больше цифр!');
    }
    return filteredPhone.replace(/^8/, '+7');
}