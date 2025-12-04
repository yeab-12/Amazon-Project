import {formatCurrency} from '../../script/utils/money.js';

/*describe(description,spaceDefinitions)
create a group of spaces(often called a suite)
calls to describe can be nested within other calls to compose your suite as a tree.
it(description,testFunctioin,timeOut)
define a single spec.a spec should contain one or more expections that test the staate of the code.
a spec whose expections all succeed will be passing and a spec with any failures will fail . the name it is a pronoun for it is  a prounoun for the test target, not an abbrevtion
of anything.it makes the spec more readable by connecting the function name it and the argument desccription as a complete sentence. 
expect(actual)->{matches}
create an expectation for spec.*/
describe('test suite: formatCurrnecy',()=>{
    it('converts Cents into dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('works with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    })
    it('rounds up to the nearest cent',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

});