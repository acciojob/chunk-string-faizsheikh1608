function stringChop(str, size) {
  // your code here
	const arr = [];
	let count = size;
	let subStr = '';
	for(int i = 0 ; i < str.length;i++){
		if(count === 0){
			arr.push(subStr);
			subStr = '';
			count = size;
		}
		subStr = str[i];
		count--;
	}

	arr.push(subStr);
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
