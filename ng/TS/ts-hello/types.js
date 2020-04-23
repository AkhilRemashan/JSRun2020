var a;
var b;
var c;
var d;
var e = [1, 2, 3];
// ^array with number
var f = [1, true, "hey"];
// ^array with any values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var backgroundColor = Color.Green;
