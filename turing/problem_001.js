let ops =  ['5', '2', 'C', 'D', '+'];
let numbers = [];
let result = 0;

for(let i=0; i<ops.length; i++) {
    if(ops[i] !== 'C' && ops[i] !== 'D' && ops[i] !== '+') {
        numbers.push(parseInt(ops[i]))
    } else if(ops[i] === 'C') {
        numbers.pop();
    }
    else if(ops[i] === 'D') {
        numbers.push(numbers[numbers.length-1] * 2);
    }
    else if(ops[i] === '+') {
        numbers.push(numbers[numbers.length-2] + numbers[numbers.length-1])
    }
}

for(let i=0; i<numbers.length; i++) {
  result += numbers[i];
}
console.log(result);
console.log(numbers);     


30
(3) [5, 10, 15]
