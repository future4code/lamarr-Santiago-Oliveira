import { CustomError } from "./CustomError";

export class InvalidName extends CustomError{
    constructor(){
        super(422,"Nome Inválido!")
    }
} 
