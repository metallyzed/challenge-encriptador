// Hash keys to be used
const hashKeys = {
    'a' : 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

// Keys to make the reverse
const reverseKeys = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}

// Encode function
function encode(text) {
    let modifiedText = '';
    for (let char of text) {
        modifiedText += hashKeys[char] || char;
    }
    return modifiedText
}

// Decode function
function decode(text) {
    let modifiedText = text;
    for (let reverseKey in reverseKeys) {
        modifiedText = modifiedText.split(reverseKey).join(reverseKeys[reverseKey])
    }
    return modifiedText;
}

// Encode example
const original = "gato";
const encodeText = encode(original);
console.log(encodeText);

// Decode example
const originalEncoded = "gaitober";
const decodedText = decode(originalEncoded);
console.log(decodedText);