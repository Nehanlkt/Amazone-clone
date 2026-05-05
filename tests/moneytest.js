import { formatCurrency } from "../scripts/utils/money.js";


// 1.basic test case
// written in string bcz tofixed returns string
if(formatCurrency(2095) ==='20.95'){
    console.log('pased');
} else{
    console.log('failed');
}


// 2.edge cases
if(formatCurrency(0)==='0.00'){
    console.log('passed');

}else{
    console.log('failed');
}


// ans cant be like 20.005 so we round upto like this 1 cent 20.01
if(formatCurrency(2000.5)==='20.01'){
    console.log('passed');

}else{
    console.log('failed');
}
// all these r called as testcases