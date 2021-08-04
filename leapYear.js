function isLeapyear(inputYear){
    if(inputYear % 400 == 0 && inputYear % 100 !== 0 || inputYear % 4 == 0){
       return true;
    }
    else{
        return false;
    }
}
var inputYear = 2028;
var leapYear = isLeapyear(inputYear);
console.log("your input leap year is  ",leapYear);