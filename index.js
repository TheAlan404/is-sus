const { decancer } = require('string-toolkit');

/**
 * @public
 * Checks if a string is SUS.
 * @param {value} string The string to check for.
 * @returns {boolean} If the string is sus or not.
 * @throws {TypeError} When a string is not specified.
 */
module.exports = (value) => {
	if (typeof value !== "string" || !value.length) throw new TypeError("sussy baka, only strings accepted for now");
	return /sus|vent|amon?g\s+?us|impost(o|e)r|\u0d9e/i.test(decancer(value).replace(/\s/g, ''));
};