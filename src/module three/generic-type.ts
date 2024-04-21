type GenericTuple<X,Y> = [X,Y];

const relation:GenericTuple<string,string>=['Parsian','Kate Winslet'];

const relationWithSalary:GenericTuple<object,string>=[{
    name:'Parsian',
    salary:10000000,
},
"Kate Winslet"
]

type GenericArray<T> = Array<T>;
const rollNumbers:number[] = [33,34,23];
const rollNumber2:string[] = ["33","34","23"];

const rollNumbers3:GenericArray<number> = [33,34,23];
const rollNumber4:GenericArray<string> = ["33","34","23"];

const UserNameRollNumber: GenericArray<{name:string,roll:number}>=[
    {
        name:'mr W',
        roll:1
    },
    {
        name:"mr y",
        roll:5
    }
]