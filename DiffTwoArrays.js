function diffArray(arr1, arr2) {
	const newArr = [];
	let lista = [];
	for(let i=0; i<arr1.length; i++){
		lista.push(arr1[i]);
	}
	for(let j=0; j<arr2.length; j++){
		lista.push(arr2[j]);
	}
	for(let i=0; i<lista.length; i++){
		if((arr1.includes(lista[i]) == true) && (arr2.includes(lista[i]) == true)){
		} else {
			newArr.push(lista[i]);
		}
	}
	return newArr;
}
