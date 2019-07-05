import {Calculadora} from "../main";
describe("calculadora test",()=>{
    it ("sumar", ()=>{
        let calculadora= new Calculadora()
        let resObtenido = calculadora.sumar(5,8)
        let resEsperado = 13
        expect(resEsperado).toEqual(resObtenido)
    })
})