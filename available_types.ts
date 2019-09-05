//string
let userName:string = 'Ajith' ;
console.log(userName);

// number
let someNumber:number = 34;
console.log(someNumber);

//boolean
let isBoolean:boolean = false;
console.log(isBoolean);

// Array of strings
let stringArray: string[] = ['reading', 'cooking'];
console.log(stringArray);

//Array of numbers
let numberArray: number[] = [1, 2, 4];
console.log(numberArray);

// Array of type any
let anyArray: any[] = ['typescript', 'testing'];
console.log(anyArray);

anyArray = [3, 4, 5, 6];
console.log(anyArray);

// tuples
let address: [string, number] = ['bangalore', 43];
console.log(address); 

// enum types
enum myColor {
    Blue,
    Red,
    Black
}

let color: myColor = myColor.Black;
console.log(color);

// enum with custom values
enum customValues {
    value1 = 5,
    value2 = 2
}
let cus: customValues = customValues.value1;
console.log(cus);

// function returns string
function returnUsername(): string {
    return userName;
}

console.log(returnUsername());

// function which retruns void
function samppleVoidFunction(): void {
    console.log('this is a void function');
}

// calling the void function
samppleVoidFunction()

// specifying the types to the arguments
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

console.log(multiply(4, 5));

// Objects 
let userData: {name: string, age: number} = {
    name: 'ajith',
    age: 28
};

console.log(userData);

//complex objects
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [1, 2, 4],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

console.log(complex);