import prompt from 'prompt'
import promptQrCode from '../../prompts/qr-code-prompt.js'
import handle from './handle.js'

 async function CreateCode(){
    prompt.get(promptQrCode, handle)

    prompt.start()
}

export default CreateCode