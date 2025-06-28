import { uppercase, lowercase, numbers, special_char } from '../../utils/password.js'

export default function validate(password, toCheck) {
    let isValid = true;
    const needs = {};

    if (toCheck.UPPERCASE_LETTERS == 'true') {
        isValid &= ([...uppercase()].filter((char) => password.includes(char)))
        needs['UPPERCASE_LETTERS'] = true;
    }

    if (toCheck.LOWERCASE_LETTERS == 'true') {
        isValid &= ([...lowercase()].filter((char) => password.includes(char)))
        needs['LOWERCASE_LETTERS'] = true;

    }

    if (toCheck.NUMBERS == 'true') {
        isValid &= ([...numbers()].filter((char) => password.includes(char)))
        needs['NUMBERS'] = true;

    }

    if (toCheck.SPECIAL_CHARACTERS == 'true') {
        isValid &= ([...special_char()].filter((char) => password.includes(char)))
        needs['SPECIAL_CHARACTERS'] = true;

    }

    return {
        isValid,
        needs,
    };

}
