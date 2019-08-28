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
