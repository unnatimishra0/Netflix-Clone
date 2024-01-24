 export const checkValidateData=(email,password)=>{

    const isEmailValid=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    
    const isPasswordValid=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isEmailValid) return 'Email Id is not Valid'

    if(!isPasswordValid) return 'Password is not Valid'

    return null;

}