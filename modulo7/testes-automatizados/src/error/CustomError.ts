export class CustomError extends Error{
    constructor(public statusCod:number,public message:string){
        super(message)
    }
}