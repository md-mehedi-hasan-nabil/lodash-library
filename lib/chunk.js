function chunk(array, length) {
    const arr = [...array]
    let result = []
    let track = []
    let count = 0;

    arr.forEach(element => {
        if (count < length) {
            track.push(element)
            count++
        }
        else {
            count = 1
            result.push(track)
            track = [element]
        }
    })
    result.push(track)

    return result
}

module.exports = chunk