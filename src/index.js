const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' ',
};


function decode(expr) {
    let string = expr.length % 10 == 0 ? expr : expr.padStart(expr.length + 10 - expr.length % 10, '0');
    let letters = [];

    letters.push(string.match(/........../g))
    letters = letters.flat();
    letters = letters.map(item => item.replace(/11/g, '-'));
    letters = letters.map(item => item.replace(/10/g, '.'));
    letters = letters.map(item => item.replace(/0/g, ''));

    letters = letters.map(item => {
        for (let sign in MORSE_TABLE)
            if (sign === item)
                item = MORSE_TABLE[sign];
        return item;
    });
    letters = letters.join('')

    return letters;

}



module.exports = {
    decode
}