export const uppercase = () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const lowercase = () => 'abcdefghijklmnopqrstuvwxyz';

export const numbers = () => '0123456789';

export const special_char = () => '!@#$%^&*()-_"';

export function getChars (toCheck)
{
    const chars = [];

    if (toCheck.UPPERCASE_LETTERS == 'true') {
        chars.push(...uppercase())
    }

    if (toCheck.LOWERCASE_LETTERS == 'true') {
        chars.push(...lowercase())
    }

    if (toCheck.NUMBERS == 'true') {
        chars.push(...numbers())
    }

    if (toCheck.SPECIAL_CHARACTERS == 'true') {
        chars.push(...special_char())
    }

    return chars;
}
