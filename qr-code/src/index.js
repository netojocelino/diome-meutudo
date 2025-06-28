import prompt from 'prompt';
import chalk from 'chalk'

import schema from './prompts/schema-main.js';
import generateQrCode from './services/qrcode/create.js';
import generatePassword from './services/password/create.js';
import validatePassword  from './services/password/validate.js';

async function main () {
    console.log(chalk.blue.bgWhite.bold(process.env.APP_NAME))

    prompt.get(schema, async function (err, res) {

        if (err) {
            console.error(err)
            return;
        }

        const answer = res.select;

        if (answer == 1) {
            generateQrCode();
            return;
        }

        else if (answer == 2) {
            const password = await generatePassword()
            console.log(`Your password is ${chalk.bgWhite.bold.yellow(password)}`)

            const isValidPassoword = validatePassword(password, process.env);
            if (!isValidPassoword.isValid) {
                console.log(chalk.bold.red(`Your password havent all required params, requires: ${Object.keys(isValidPassoword.needs)}`));
            }
            return;
        }

    });


    prompt.start({
        colors: true,

    });
}


main ();
