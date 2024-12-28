function stringChop(str, size) {
  // your code here
	const arr = [];
	if(!str || size <= 0)
		return arr;
	let count = size;
	let subStr = '';
	for(let i = 0 ; i < str.length;i++){
		if(count === 0){
			arr.push(subStr);
			subStr = '';
			count = size;
		}
		subStr += str[i];
		count--;
	}

	if (subStr) {
    arr.push(subStr);
  }
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
