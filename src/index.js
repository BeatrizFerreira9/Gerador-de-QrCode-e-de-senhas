import prompt from 'prompt'
import Prompt from './prompts/prompt.js'
import CreateCode from './services/qr-code/create.js'
import promptQrCode from './prompts/qr-code-prompt.js'
import handle from './services/qr-code/handle.js'
import createPassword from './password/create.js'

async function main(){
    prompt.get(Prompt, async function(error, resolve){
        if(resolve.select == 1) await CreateCode()
        if(resolve.select == 2) await createPassword()
        
    })
}

main()