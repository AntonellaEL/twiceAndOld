import { describe, it, expect } from "vitest";
import { calcularAniosDobleEdad } from "../src/app";

describe('calcularAniosDobleEdad', ()=>{
    it ('deberia devolver 22 si el padre tiene 36 y el hijo 7', ()=>{
        expect(calcularAniosDobleEdad(36,7)).toBe(22);
    })
    it ('deberia devolver 5 si el padre tiene 55 y el hijo 30', ()=>{
        expect(calcularAniosDobleEdad(55,30)).toBe(5);
    })
    it ('deberia devolver 0 si el padre tiene 42 y el hijo 21', ()=>{
        expect(calcularAniosDobleEdad(42,21)).toBe(0);
    })
    it ('deberia devolver 20 si el padre tiene 22 y el hijo 1', ()=>{
        expect(calcularAniosDobleEdad(22,1)).toBe(20);
    })
    it ('deberia devolver 29 si el padre tiene 29 y el hijo 0', ()=>{
        expect(calcularAniosDobleEdad(29,0)).toBe(29);
    })
    
    
})