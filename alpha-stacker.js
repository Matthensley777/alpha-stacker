// Create an array that contains the letters of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];


// The stackLetter function should accept the array as the sole argument
function stackLetters (alphabet) {
}
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
 
var aStack = [];
 for (var i = 0; i < alphabet.length; i++) {
 	
 	aStack.push(alphabet[i]);
 	if(i % 3 === 2)
 	aStack.push(" ");


 console.log(aStack.toString().replace(/,/g, ""));
 }


// Invoke the function and pass in the array
stackLetters(alphabet)


