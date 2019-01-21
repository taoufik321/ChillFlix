// All TypeScript Build in types

// Boolean
let a:boolean = false;

// Number
let b:number = 3;
b = 4;

// String
let c:String = "test";

// Array
let d: Array<number> = [1, 2, 3];

// Enum
enum Color {Red, Green, Blue}
let e: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Type Assertions example 1:
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

// Type Assertions example 2:
let someValue2: any = "this is a string";

let strLength2: number = (someValue2 as string).length;