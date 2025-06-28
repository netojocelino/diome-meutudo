import prompt from 'prompt';
import schema from '../../prompts/schema-qrcode.js';
import qr from 'qrcode-terminal';
import chalk from 'chalk';


function generateQrCode ()
{
    console.log('Gerar QRCode')

    prompt.get(schema, async function (err, res) {
        const { link, type } = await res;

        console.log(`We will convert ${link} to a ${type} QRCode`)

        if (link == '') {
            console.log(chalk.red.bold('Link is required'))
            return;
        }

        if (type == '') {
            console.log(chalk.red.bold('Type (1 or 2) is required'))
            return;
        }

        qr.generate(link, {
            small: type == 2,
        }, function (qrcode) {
            console.log(chalk.green('QRCode created'))
            console.log(qrcode)
        })

    })

    prompt.start()
}

export default generateQrCode;
