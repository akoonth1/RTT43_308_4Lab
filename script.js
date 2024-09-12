
console.log('Hello, World!');


let a_item = ["October Sky", "The Shawshank Redemption", "The Dark Knight"];
 a_item= a_item.map((item) => { return item.toUpperCase(); });

console.log(a_item);

for (let x in a_item)
{
console.log(a_item[x])
}

console.log(a_item.join(" "));

console.log(a_item.concat());

// testarray= [14, 18, 39, 6, 5, 8];

// //testarray.unshift();

// testarray.pop();
// // console.log(testarray);

a_item.push("The Godfather");
a_item.unshift("Rumble in the Bronx");
a_item.unshift(8);
console.log(a_item.unshift("Enter the Dragon"));

newarray= [0,1,2,3,4,5,6,7,8,9,10];
console.log(newarray.slice(0,2));
console.log(newarray)
console.log(newarray.splice(1,1))
console.log(newarray.splice(2,5));
console.log(newarray)splice