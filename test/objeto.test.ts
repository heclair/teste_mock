import somarArray from "../src/array";
import operacao from "../src/Operacao";

jest.mock("../src/Operacao", () => {
    return {
        somar: jest.fn().mockImplementation((a, b) => a + b),
    };
});

it("Somar array", () => {
    // Cria um spy para o método somar da classe Operacao
  
    const r = somarArray([1, 2, 3, 4]);
    expect(r).toBe(10);

   
});
