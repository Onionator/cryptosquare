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

    // gets the square root of count
    var squareRoot = Math.sqrt(count);
    //take the square root of count and round up to the nearest interger
    var columns = Math.ceil(squareRoot);
    console.log(columns + " is the number of columns");
    var result = [];
    var rows = Math.ceil(alphaNumericMessage.length / columns)
    console.log("We have a total of " + rows + " rows.");

    //this loop adds blank strings based on the number of columns
    for (i = 0; i < columns; i++) {
      result.push("");
    }
    for (n = 0; n < rows; n++) {
      //this for loop inserts a character at the end of each string in the array
      for (i = 0; i < columns; i++) {
        result[i] = result[i] + (alphaNumericMessage.slice(0,1));
        alphaNumericMessage = alphaNumericMessage.substr(1);
      }
    }
    console.log(result);
    //this will join everything in the array into a string
    var messageString = result.join("");
    console.log(messageString);
    //this will turn the entire srting into a lowercase
    var messageLowercase = messageString.toLowerCase();
    console.log(messageLowercase);
    var encryptedMessage = "";
        for (i = 0; i < (count/5); i++) {
        encryptedMessage += (messageLowercase.slice(0,5));
        messageLowercase = messageLowercase.substr(5);
        //add a space between each set of five chars
        encryptedMessage += " ";
    }
    encryptedMessage = encryptedMessage.trimEnd();
    console.log(encryptedMessage);
    //this will output encrypted code to screen
$ ("p").text(encryptedMessage);

  });
});
