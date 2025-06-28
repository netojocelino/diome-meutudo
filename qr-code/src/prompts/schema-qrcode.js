import chalk from 'chalk'

const schema = [
    {
        name: 'link',
        description: chalk.yellow('Link for generate QRCode'),
        require: true
    },

    {
        name: 'type',
        description: chalk.yellow('Choose between 1 - Normal or 2 - Terminal'),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold.bgWhiteBright('Options available: 1, 2'),
        require: true
    },
]

export default schema;
