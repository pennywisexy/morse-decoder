const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode ( message, n = 10 ) {
  var massMessage = [];
  var messageConverted = [];
  
  for(let i = 0; i < message.length; i += n) {
     massMessage.push(message.substr(i, n))
  }

  for ( let j = 0; j < massMessage.length; j++) {
    massMessage[j] = massMessage[j].split('11').join('-').split('10').join('.').split('0').join('');
    massMessage[j].split("   ").map(function (word) {
    word.split(" ").map(function (letter) {
        messageConverted.push(MORSE_TABLE[letter]);
        
    });
    messageConverted.push("  ");
});
  }
  messageConverted = messageConverted.join('');
  messageConverted = messageConverted.split('  ').join('98')
  messageConverted = messageConverted.split('9898').join(' ')
  messageConverted = messageConverted.split('98').join('')

  return messageConverted
}




module.exports = {
    decode
}

