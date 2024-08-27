// Keys to be used in encode
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
    if (text === '') {
        showPlaceholder();
    } else {
        let modifiedText = '';
        for (let char of text) {
            modifiedText += hashKeys[char] || char;
        }
        showOutput(modifiedText);
        return modifiedText;
    }
}

// Decode function
function decode(text) {
    if (text === '') {
        showPlaceholder();
    } else {
        let modifiedText = text;
        for (let reverseKey in reverseKeys) {
            modifiedText = modifiedText.split(reverseKey).join(reverseKeys[reverseKey])
        }
        showOutput(modifiedText);
        return modifiedText;
    }
}

// Show output
function showOutput(text) {
    document.getElementById('outputPlaceholder').style.display = 'none';
    let outputTextArea = document.getElementById('outputText');
    outputTextArea.style.display = 'block';
    outputTextArea.value = text;
    document.getElementById('copy-button').style.display = 'block';
}

// Show placeholder
function showPlaceholder() {
    document.getElementById('outputText').style.display = 'none';
    document.getElementById('copy-button').style.display = 'none';
    document.getElementById('outputPlaceholder').style.display = 'flex';
}

// Copy output text
function copyOutputText() {
    var outputText = document.getElementById("outputText");

    navigator.clipboard.writeText(outputText.value);
}

// Ensure these functions are available globally
window.encode = encode;
window.decode = decode;

/*
// Encode example
const original = "gato";
const encodeText = encode(original);
console.log(encodeText);

// Decode example
const originalEncoded = "gaitober";
const decodedText = decode(originalEncoded);
console.log(decodedText);
*/