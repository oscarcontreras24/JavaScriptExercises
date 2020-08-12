function add (...args) {
	let total = 0
	for (let i = 0; i < args.length; i++) {
		total += args[i]
	}
	//console.log(total)
	return total
}

function subtract (...args) {
	let total = args[0]
	for (let i = 1; i < args.length; i++) {
		total -= args[i]
	}
	//console.log(total)
	return total
}

function sum (...args) {
  let arr = args[0]
	let total = 0
	for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i])
		total += arr[i]
	}
	//console.log(total)
	return total
}

function multiply (...args) {
	let arr = args[0]
	let total = arr[0]
	for (let i = 1; i < arr.length; i++) {
		total *= arr[i]
	}
	console.log(total)
	return total
}

function power(num, exp) {
  let answer = 1;
	for (let i = 0; i < exp; i++) {
		answer *= num;
    //console.log(answer);
	}
  //console.log(answer);
	return answer;
}

function factorial(num) {
  if (num == 1) {
  	return num;
  }
  else if (num == 0) {
    return 1
  }
  else {
  	return num*factorial(num-1);
  }
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
