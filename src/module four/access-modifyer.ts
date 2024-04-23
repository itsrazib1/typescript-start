class Bankaccount{
    id:number;
    name:string;
    private _balance:number;

constructor(id:number,name:string,balance:number){
    this.id=id;
    this.name=name;
    this._balance=balance;

}

}
const myAccount = new Bankaccount(444,"Razib", 20)
myAccount._balance= 0 ;
console.log(myAccount)