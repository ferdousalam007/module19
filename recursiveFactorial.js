//factorial function recursive
function recursivefactFunc(numberinput){
    if(numberinput == 1){
        return 1;
    }
   var ok =  numberinput * recursivefactFunc(numberinput-1);
   //ok = n*(n-1) this is the original formulla
   return ok;
  
}
var inputYourNumber = 5;
var getfact = recursivefactFunc(inputYourNumber);
console.log(getfact);


function ab(cd){
        if(cd == 1){
        return 1;
     }
   var ok1 =cd * ab(cd-1);//this ab(cd-1)give value ex (5-1)*(4-1)*(3-1)*(2-1)*(1-1)
    return ok1;
}
var hi = ab(5);
console.log(hi);