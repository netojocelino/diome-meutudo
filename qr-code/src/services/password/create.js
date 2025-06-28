import { getChars } from '../../utils/password.js'

async function generatePassword ()
{
    const length = process.env.PASSWORD_LENGTH;
    let password = '';

    const chars = getChars(process.env);

    for (let index = 0; index < length; index++)
    {
        const position = Math.floor(Math.random() * chars.length);

        password += chars[position];
    }

    return password;
}


export default generatePassword;
