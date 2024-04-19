let emni:any;

emni = "Next Levele Web Development";

(emni as string).length;

let omni:any;

omni = 93;

(emni as number).toFixed;


function kgToGram(param:string|number):string|number{
    if(typeof param === 'string'){
        const value = parseFloat(param)*1000
        return `The Converted Result is:${value} Gram`
    }
}