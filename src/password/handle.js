import dotenv from 'dotenv'


const result = dotenv.config()

console.log(result)

async function handle(){
    let characters = []
    let password = ''
    
    const passwordLength = process.env.PASSWORD

    if(process.env.LETRAS_ALTA == 'true'){
        characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    if(process.env.LETRAS_BAIXA == 'true'){
         characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

     if(process.env.NUMBERS == 'true'){
         characters.push(...'0123456879')
 
        }
    
         if(process.env.SPECIAL == 'true'){
         characters.push(...'@#$&!^*-_')
    }

    for(let a = 0; a < passwordLength; a++){
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }
    return password
    }

export default handle