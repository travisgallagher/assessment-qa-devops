const {shuffleArray} = require('./utils')

let testData = [1, 2, 3, 4]


describe('shuffleArray should', () => {
    // CODE HERE
    test("should return an array of the same length as the argument", () => {
        let testArr = shuffleArray(testData)        
        expect(testArr.length).toEqual(testData.length); 
    }); 

    // test("should return data of type array", () => {
    //     let test1 = shuffleArray(testData)
    //     expect(test1.isArray).toBe(true)
    // }); 

})