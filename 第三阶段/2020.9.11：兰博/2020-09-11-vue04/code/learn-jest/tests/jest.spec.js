const forEach = require('../jest.js');
test('callback',()=> {
    const mockCallback = jest.fn(x => 42 + x);
// console.log('mockCallback',mockCallback);
forEach([0, 1], mockCallback);
console.log('mockCallback.mock.calls.length',mockCallback.mock.calls.length);
// The mock function is called twice
console.log(mockCallback);

expect(mockCallback.mock.calls.length).toBe(2);
// expect(aa).toBe(2);
})


// The first argument of the first call to the function was 0
// expect(mockCallback.mock.calls[0][0]).toBe(0);

// // The first argument of the second call to the function was 1
// expect(mockCallback.mock.calls[1][0]).toBe(1);

// // The return value of the first call to the function was 42
// expect(mockCallback.mock.results[0].value).toBe(42);


// test('two plus two', () => {
//     const value = 2 + 2;
//     expect(value).toBeGreaterThan(3);
//     expect(value).toBeGreaterThanOrEqual(3.5);
//     expect(value).toBeLessThan(5);
//     expect(value).toBeLessThanOrEqual(4.5);
  
//     // toBe and toEqual are equivalent for numbers
//     expect(value).toBe(4);
//     expect(value).toEqual(4);
// });
// test('there is no I in team', () => {
//     // console.log(expect('team'));
//     expect('team').not.toMatch(/A/);
// });

// test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/Atop/);
// });


