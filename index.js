// All TypeScript Build in types
// Boolean
var a = false;
// Number
var b = 3;
b = 4;
// String
var c = "test";
// Array
var d = [1, 2, 3];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var e = Color.Green;
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// Void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
// Null and Undefined
var u = undefined;
var n = null;
// Type Assertions example 1:
var someValue = "this is a string";
var strLength = someValue.length;
// Type Assertions example 2:
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
//# sourceMappingURL=index.js.map