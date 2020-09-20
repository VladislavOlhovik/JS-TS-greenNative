import { sum, mult } from "./01";


test('sum should be correct', ()=>{
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const resault1 = sum(a,b);
    const resault2 = sum(c,b);
    //expeck resault
    expect(resault1).toBe(3);
    expect(resault2).toBe(5);
})
test('mult should be correct', ()=>{
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const resault1 = mult(a,b);
    const resault2 = mult(c,b);
    //expeck resault
    expect(resault1).toBe(2);
    expect(resault2).toBe(6);
})