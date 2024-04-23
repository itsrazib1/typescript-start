class Animal{
    name:string;
    spech:string;
    sound:string;
    constructor(name:string,spech:string,sound:string){
        this.name= name;
        this.spech=spech;
        this.sound=sound;
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("Garman Shepard","Dog","Ghew Ghew");
const cat = new Animal("Parsian","Cat","meaw meaw");

dog.makeSound();
cat.makeSound();
