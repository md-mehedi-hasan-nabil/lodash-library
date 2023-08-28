/**
 *  Falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 * @param {array} array 
 * @returns {array}
 */

function compact(array) {
    return array.reduce((accumulator, currentValue) => {
        if (currentValue) {
            accumulator.push(currentValue)
        }
        return accumulator
    }, [])
}


module.exports = compact