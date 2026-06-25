import chalk from 'chalk'
import handle from '../services/qr-code/handle.js'

const promptQrCode = [
    {
        name: 'link',
        description: chalk.yellow('Digite o link para gerar o QrCode: ')
    },

    {
        name: 'type',
        description: chalk.yellow('Escolha o tipo de QrCode: 1 - Normal ou 2 - Terminal'),
        //Abaixo é RegRex:
        pattern: /[1/2]+$/,
        message: chalk.red('Escolha apenas entre um ou dois'),
        required: true
    }

]


export default  promptQrCode