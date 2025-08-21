export class User{
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    public getter(){
        return this.name
    }

    public setter(name: string){
        this.name = name
    }
}