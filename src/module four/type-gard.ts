// keyof guard
type Alphaneumeric = string|number;

function add(param1:Alphaneumeric,param2:Alphaneumeric):Alphaneumeric{
    if (typeof param1 == 'number' && typeof param2 ==='number'){
        return param1+param2
    }
    else param1.toString()+param2.toString();
}

add('1','2')
add(1,2)

// in gard 
type NormarUserType={
    name:string
}
type adminUserType={
    name:string;
    role:'Admin'
}

function getUser(user:NormarUserType|adminUserType){
    if('role' in user){
        return `I Am an Admin And My Role is ${user.role}`
    }
    else{
        return 'I am a Normal User'
    }
}
const normalUser1 : NormarUserType={name:'Mr. Kallu'}
const AdminUser1 : adminUserType={name:'Mr. Gallu',role:'Admin'}


console.log(getUser(normalUser1));
console.log(getUser(AdminUser1));


// instanceof gard 
class Animal{
    name:string;
    species:string;
    constructor(name:string,species:string){
        this.name=name;
        this.species=species;
    }
    makeSound(){
        console.log('I am Makeing Sound');
    }
}
