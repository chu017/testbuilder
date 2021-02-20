// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'
// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  var digLength = cardNumber.length;
  var firstNum = cardNumber.slice(0, 1);
  var firstTwoNum = cardNumber.slice(0, 2);
  var firstThreeNum = cardNumber.slice(0, 3);
  var firstFourNum = cardNumber.slice(0, 4);
  var firstFiveNum = cardNumber.slice(0, 5);
  var firstSixNum = cardNumber.slice(0, 6);

  if (firstTwoNum === '38' || firstTwoNum === '39' && digLength === 14) {
    return 'Diner\'s Club';
  }

  if (firstTwoNum === '34' || firstTwoNum === '37' && digLength === 15) {
    return 'American Express';
  }

  if (firstNum === '4' && firstFourNum !== '4903' && firstFourNum !== '4905'
  && firstFourNum !== '4911' && firstFourNum !== '4936' &&
  (digLength === 13 || digLength === 16 || digLength === 19) ) {
    return 'Visa';
  }

  if (firstTwoNum === '51' || firstTwoNum === '52' || firstTwoNum === '53' ||
  firstTwoNum === '54' || firstTwoNum === '55' && digLength === 16) {
    return 'MasterCard';
  }

  if (firstFourNum === '6011' ||
  firstThreeNum === '644' || firstThreeNum === '645'
  || firstThreeNum === '646' ||
  firstThreeNum === '647' || firstThreeNum === '648'
  || firstThreeNum === '649' || firstTwoNum === '65'
  && (digLength === 16
    || digLength === 19) ) {
    return 'Discover';
  }

  if (firstFourNum === '5018' || firstFourNum === '5020'
  || firstFourNum === '5038' || firstFourNum === '6304'
  && (digLength === 12 || digLength === 13 || digLength === 14
  || digLength === 15 || digLength === 16 || digLength === 17 ||
  digLength === 18 || digLength === 19) ) {
    return 'Maestro';
  }

  var numArr = [];
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    numArr.push(prefix.toString());
  }

  for (var prefix = 624; prefix <= 626; prefix++) {
    numArr.push(prefix.toString());
  }

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    numArr.push(prefix.toString());
  }

  if (numArr.includes(firstSixNum) || numArr.includes(firstThreeNum) ||
  numArr.includes(firstFourNum) && (digLength === 16 || digLength === 17 ||
    digLength === 18 || digLength === 19) ) {
    return 'China UnionPay';
  }

  if (firstFourNum === '4903' || firstFourNum === '4905'
  || firstFourNum === '4911' || firstFourNum === '4936'
  || firstSixNum === '564182' || firstSixNum === '633110'
  || firstFourNum === '6333' || firstFourNum === '6759'
  && (digLength === 16 || digLength === 18 || digLength === 19) ) {
    return 'Switch';
  }




  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
