import { formatCurrency } from "../scripts/utils/money.js";


// to create a test suite we use a fn called describe
describe('test suite:formatCurrency',()=>{
    // it is used to create a test
   it('coverts cents into dollars',()=>{
    // insted of if n else expect is used 
        expect(formatCurrency(2095)).toEqual('20.95');

   });

   it('works vt zero',()=>{
    expect(formatCurrency(0)).toEqual('0.00');

   });

   it('rounds upto nearest cents',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01');
   });

});