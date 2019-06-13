$(document).ready(function () {
  $("button").click(function () {
    console.log("button works");
    var originalMessage = $('input:text[name=message]').val();
    console.log(originalMessage);
    var condensedMessage = originalMessage;
    var punctuation = [".", ",", ";", ":", "/", "?" , "<" , ">" ,'"', "'", "[", "]", "{", "}", "|", "!","@","#","$","%","^","&","*","(",")","_","+","-","=" ]
    //replace all the spaces in the string
    // for (i = 0; i < originalMessage.length; i++) {
    while (condensedMessage.search(" ") !== -1) {
      console.log(condensedMessage.search(" "));
      condensedMessage = condensedMessage.replace(" ", "");
    };
    console.log(condensedMessage);
    console.log(condensedMessage.search(" "));
    //test to see if it is alpha-numeric
    var alphaNumericMessage = condensedMessage;
    for (i = 0; i < condensedMessage.length; i++) {
      if (alphaNumericMessage.search(punctuation)) {
        console.log("removing punctuation");
        alphaNumericMessage = alphaNumericMessage.replace(punctuation[i], "")
      }
    };
    console.log(alphaNumericMessage);
    //count the letters
    var count = alphaNumericMessage.length;
    console.log("we have " + count + " characters");

    //figure out how many columns and rows we need - to be made into a function
    // gets the square root of count
    var squareRoot = Math.sqrt(count);
    console.log(Math.sqrt(count) + " is the square root of count");
    //take the square root of count and round up to the nearest interger
    var columns = Math.ceil(squareRoot);
    console.log(columns + " columns");

    var result = [];


    //this loop adds blank strings based on the number of columns
    for (i = 0; i < columns; i++) {
     result.push("");
   }
   console.log(result);

   // figure out why it won't add the last 3 letters !!!!!!!!!!!!!!
    for (n = 0; n < alphaNumericMessage.length; n++) {
      //this for loop inserts a character at the end of each string in the array
      for (i = 0; i < columns; i++) {
        console.log("in for loop of i < columns");
        result[i] = result[i] + (alphaNumericMessage.slice(0,1));
        alphaNumericMessage = alphaNumericMessage.substr(1);
      }
    }
    console.log(result);

  });
});
