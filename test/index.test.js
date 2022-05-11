const TakeArch = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('TakeArch::', () => {
    it('must be a function', () => {
        expect(typeof TakeArch).toBe('function');
    })
    it('Array return', async () => {
        const result = await  TakeArch('/home/paulo/Documentos/estudos/node/2299-lib-nodejs-markdown-aula-1/test/arquivos/texto1.md')
        expect(result).toEqual(arrayResult)
    })
    it('no links', async ()=>{
        const result = await TakeArch("/home/paulo/Documentos/estudos/node/2299-lib-nodejs-markdown-aula-1/test/arquivos/texto2.md")
        expect(result).toBe('There are no links')
    })
})

//test('must be a function', () => { //tem que ser função
//    expect(typeof TakeArch).toBe('function');
//  });