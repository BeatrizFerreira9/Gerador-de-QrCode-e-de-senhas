import qrcod from 'qrcode-terminal'
import  promptQrCode from '../../prompts/qr-code-prompt.js'

async function handle(error, resolve) {
    if(error){
        console.log('Erro na aplicação')
        return
    }
    const verifica = resolve.type == 2

    qrcod.generate(resolve.link, {small: verifica}, (qrcode) => {
        console.log('QrCode gerado com sucesso!\n')
        console.log(qrcode)
    }) 
}

export default handle