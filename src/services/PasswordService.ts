export default function generatePassword() {
    let password: string = ''
    let characters:string = 'Aa!&#UxYWTKvVMnOoPRsw1234Xz567!@89bClI'
    let passwordLength:number = 8

    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )        
    }

    return password    
}