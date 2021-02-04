/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {

	let resultObject = {};

	for(const key of Object.keys(obj)) {
		if(fields.indexOf(key) == -1)
			resultObject[key] = obj[key];
	}

	return resultObject;
};
