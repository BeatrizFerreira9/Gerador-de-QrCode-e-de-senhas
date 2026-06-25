import chalk from "chalk"

const Prompt = [
    {
        //a seguir é RegEx, onde você faz descrições e consegue ter acesso a eles:
        name: "select",
        description: chalk.green("Escolha umas das opções: (1 - Gerar QR CODE ou 2 - Gerar SENHA)"),
        //Padrão para a pessoa escolher apenas entre 1 ou 2 
        pattern: /^[1-2]+$/,
        mensage: chalk.blue("Escolha apenas 1 e 2"),
        required: true,
    }
]

export default Prompt