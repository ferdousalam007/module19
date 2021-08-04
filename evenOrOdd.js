function evenNumber(evnNumber){
  if(evnNumber %2 == 0){
      return true;
  }else{
      return false;
  }
}
var inputEvenNumber = 40;
var outputEvenNumber = evenNumber(inputEvenNumber);
console.log("output even number is ", outputEvenNumber);


function oddNumber(inputOddNumber){
    if(inputOddNumber %2 !== 0){
        return true;
    }else{
        return false;
    }
  }
var inputOddNumber = 40;
var outputOddNumber = oddNumber(inputOddNumber);
console.log("output odd number is ", outputOddNumber);