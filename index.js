function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
 console.log(string.toUpperCase);
}

function logWhisper(string) {
 console.log(string.toLowerCase);
}

var lowercase = "I can't hear you!";

var uppercase = "YES INDEED!";

var mixedCase = "I love you, too.";


function sayHiToGrandma(string) {  
    if (string.toLowerCase() === sring) {
    return lowercase;
  }
 if  (string.toUpperCase() === string)  {
    return uppercase;
  }

 else {
  return mixedCase;
}
  
}