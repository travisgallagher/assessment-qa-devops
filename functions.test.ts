const {shuffleArray} = require('./utils')

let testData = [1, 2, 3]


describe('shuffleArray should', () => {
    // CODE HERE
    test("should return an array of the same length as the argument", () => {
        let testArr = shuffleArray(testData).length()        
        expect(testArr).toBe(3); 
    })

    test("should return data of type array", () => {
        let test1 = shuffleArray(testData).isArray()
        expect(test1).toBe(true)
    })

})