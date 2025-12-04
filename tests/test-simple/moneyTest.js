import {formatCurrency} from '../../script/utils/money.js';
/*test
1.manual
2.automated
       a.basictest:tests if the code is working
       b.edge cases:test with values that are tricky */
console.log('test suite: formatCurrnency');
console.log('converts cents into dollars');
if (formatCurrency(2095) === '20.95'){//basic
    console.log('passed');
}else{
    console.log('failed');
}

console.log('works with 0');
if (formatCurrency(0) === '0.00'){//edge
    console.log('passed');
}else{
    console.log('failed');
}
console.log('rounds up to the nearest cent');
if (formatCurrency(2000.5) === '20.01'){
    console.log('passed');//edge
}else{
    console.log('failed');
}

