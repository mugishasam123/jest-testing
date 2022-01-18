const stringLength = require('./stringLength');
const reverseString = require('./reverseString')

describe('my string',() => {
    test('check string length', () => {
        expect(stringLength('aze')).toEqual(3)
    })
    test('check string length', () => {
        expect(reverseString('aze')).toBe('eza')
    })
});


