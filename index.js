function isLetter(charCode) {
	return charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122;
}

module.exports = isLetter;
