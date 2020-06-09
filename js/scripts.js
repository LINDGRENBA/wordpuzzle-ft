// business logic
let checkForVowels = function(inputString) {
  let stringArray = inputString.split("");
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (index = 0; index <= index.length - 1; index += 1) {
    vowels.forEach(function(vowel) {
      if (vowel === stringArray[index]) {
        
      }
    })
  };

  
};


// user interface logic
$(document).ready(function() {
  $('button[type=submit]').click(function(event) {
    event.preventDefault();
    
    let inputString = $("input[name=input-string]").val();
    let newString = checkForVowels(inputString);

    // $("#output").text(inputString);
  });
});
