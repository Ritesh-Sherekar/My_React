let arr = [10,20,30,40,50];
console.log(arr);
for(let i=0; i<arr.length; i++){
    console.log("Elemet of index " + i + " with element " + arr[i]);
}

for(let value of arr){
    console.log(value);
}

arr.forEach((value, index) =>{
    console.log("Element of Index " + index + " with Value " + value);
})

arr.push(60);
console.log(arr);
arr.pop(60);
console.log(arr);
arr.unshift(1000);
console.log(arr);
arr.shift(1000);
console.log(arr);