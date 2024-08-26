const hashKeys = {
    'a' : 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

const reverseKeys = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}

function encode(text) {
    let modifiedText = '';
    for (let char of text) {
        modifiedText += hashKeys[char] || char;
    }
    return modifiedText
}

function decode(text) {
    let modifiedText = text;
    for (let reverseKey in reverseKeys) {
        modifiedText = modifiedText.split(reverseKey).join(reverseKeys[reverseKey])
    }
    return modifiedText;
}

const original = "gato";
const encodeText = encode(original);
console.log(encodeText);

const originalEncoded = "gaitober";
const decodedText = decode(originalEncoded);
console.log(decodedText);