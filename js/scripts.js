// business logic
let checkForVowels = function(inputString) {
  let finalArray = [];
  let stringArray = inputString.split("");
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let index = 0; index <= stringArray.length - 1; index += 1) {
    finalArray.push(stringArray[index]);
    for (let j = 0; j <= vowels.length - 1; j++) {
      if (vowels[j] === stringArray[index]) {
        finalArray.pop();
        finalArray.push("-");
        break;
      };
    };
  };
  return finalArray.join("");
};


// user interface logic
$(document).ready(function() {
  $('button[type=submit]').click(function(event) {
    event.preventDefault();
    
    let inputString = $("input[name=input-string]").val();
    let newString = checkForVowels(inputString);
    $("input[name=input-string]").val("");
    $("#output").text(newString);
  });
});
