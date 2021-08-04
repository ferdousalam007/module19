//inches to feet convert
function inchesToFeet(incesh){
    var convertfeet = incesh/12;
    return convertfeet;

}
var inputInches = 120;
var firstResult = inchesToFeet(inputInches);
console.log("first conver feet", " ", firstResult);


var inputInches2 = 144;
var secondResult = inchesToFeet(inputInches2);
console.log("second conver feet", " ", secondResult);