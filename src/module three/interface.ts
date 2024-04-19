type User = {
    name: string;
    age:number
};
interface IUser{
    name: string;
    age:number
}
interface IExtendeduser extends IUser{
    role:string;
}
const userWithTypwAlias: User={
    name:'type Alias',
    age:10
}
const userWithInterface: IUser={
    name:'Inter Face',
    age:20
}