import chalk from 'chalk'

const schema = [
    {
        name: 'select',
        description: chalk.yellow('Choice between 1 - QrCode, 2 - Password'),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold.bgWhiteBright('Options available: 1, 2'),
        require: true
    },
]

export default schema;
