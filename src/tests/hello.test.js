const { hello } = require('../services/hello')

describe('Say Hello testes', () => {

    test('Should say Hello Word', () => {
        const response = hello()
        expect(response).toBe('Hello world')
    })

    it('Should say Hello Sousa', () => {
        const response = hello("Sousa")
        expect(response).toBe('Hello Sousa')
    })

})