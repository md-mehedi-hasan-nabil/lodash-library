/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * @param {array} array 
 * @returns {array}
 */

function concat(array) {
    const args = Object.values(arguments)
    return args.reduce((accumulator, currentValue) => {
        if (Array.isArray(currentValue)) {
            accumulator.push(currentValue[0])
        } else {
            accumulator.push(currentValue)
        }

        return accumulator
    }, [])
}

module.exports = concat