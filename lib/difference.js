/**
 * 
 * @param {array} array 
 * @returns array
 */

function difference(array1, array2) {
    const result = {}
    if (array1.length < array2.length) {
        array2.forEach(element => {
            if (!(array1.includes(element))) {
                result[element] = element
            }
        });
    } else {
        array1.forEach(element => {
            if (!(array2.includes(element))) {
                result[element] = element
            }
        });
    }
    return Object.values(result)
}

module.exports = difference