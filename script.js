
// Part_one refactorcode

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);


sample_text_1 ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
sample_text_2b ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"



console.log("Hello World");

// console.log(sample_text_1);

let text_array = [];
let break_array = [];
let segment_array = [];
let text_array_2 = [];

for(i in sample_text_1){

    text_array.push(sample_text_1[i]);     // This will push the individual characters but I'm going to try using a spreader instead

    if (sample_text_1[i] == "\n"){
        break_array.push(i);
    }
    if (sample_text_1[i] == ","){
        segment_array.push(i);
    }

    if (i == sample_text_1.length - 1){
        break_array.push(i);
    }
    else{
        text_array_2.push(sample_text_1[i]);

    }


}

let cell = [];
let row = [];
let current_cell =''

//check point

for (let i = 0; i < sample_text_1.length; i++) {
    let char = sample_text_1[i];
    
    if (char === ',' || char === '\n') {
        if (current_cell.length > 0) {
            cell.push(current_cell);
            current_cell = '';
        }
    } else {
        current_cell += char;
    }

    if (char === '\n') {
        row.push(cell);
        cell = [];
    }
}

// Push the last word if there is any
if (current_cell.length > 0) {
    cell.push(current_cell);
    row.push(cell);
}

//console.log(cell);

console.log(row)

//Part 2

//... see part 1?


//Part 3

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
// For instance, the results of the example data above being passed through this step are as follows:
// [["ID", "Name", "Occupation", "Age"],
//  ["42", "Bruce", "Knight", "41"],
//  ["57", "Bob", "Fry Cook", "19"],
//  ["63", "Blaine", "Quiz Master", "58"],
//  ["98", "Bill", "Doctor’s Assistant", "26"]]
// becomes
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]



console.log(row)

const rowObjects = row.map((row, index) => {    
    const [id, name, occupation, age] = row;
    return { id, name, occupation, age };
})

console.log(rowObjects);


//Part 4

// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
// So far, the results should look like this:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.



let shifted = rowObjects.shift();
let popped = rowObjects.pop();

console.log(rowObjects);
console.log(popped);

rowObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

rowObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(rowObjects);


let totalAge=0;
let averageAge;
let number_of_people = rowObjects.length;

for (let i = 1; i < number_of_people; i++) {
    totalAge += Number(rowObjects[i].age);
}

console.log(rowObjects[1].age);
console.log(totalAge);
averageAge = totalAge / number_of_people;

console.log(averageAge);






// Part 5

let heading=(Object.keys(rowObjects[0]))
console.log(heading[1]);
console.log(rowObjects[0][heading[1]]);
// for(i in heading){
//     console.log(rowObjects[i+1][heading[i]]);
// }   




// let delimiter_array =  segment_array.concat(break_array);
// delimiter_array.sort(function(a, b){return a-b});
// //text_array = [...sample_text_1];


// console.log(text_array);
// console.log(break_array);
// console.log(segment_array);
// console.log(delimiter_array);
// console.log(text_array_2);

// let cell = [];

// for(i in)

// for (let x = 0; x < delimiter_array.length -1; x+=1) {
//     console.log(delimiter_array[x]);
//     console.log(sample_text_1[Number(delimiter_array[x+1])]);
//     console.log(typeof(delimiter_array[x+1]));
//     console.log(typeof(text_array[delimiter_array[x+1]]));

//         cell.push(text_array.slice(delimiter_array[x]+1, delimiter_array[x+1]));
//     console.log(text_array[delimiter_array[x]]);
// console.log(text_array[delimiter_array[x]+1]);
// }
//console.log(cell);



// for (let i = 0; i < delimiter_array.length - 1; i+=1) {
//     let start = delimiter_array[i];
//     let end = delimiter_array[i + 1];
//     cell.push(text_array.slice(start, end).join(''));
// }

// // Capture the last chunk if necessary
// if (delimiter_array[delimiter_array.length - 1] < text_array.length) {
//     cell.push(text_array.slice(delimiter_array[delimiter_array.length - 1]).join(''));
// }

// console.log(cell);
// let cell = [];
// for( i in delimiter_array){
//     console.log(i);
//     //    console.log(text_array.slice(delimiter_array[i], delimiter_array[i+1]+1));
//     // else{
//     //     cell.push(text_array.slice(delimiter_array[i]+1, delimiter_array[i+1]));
//     // }
// }
// cell=(text_array.splice(0,  2).join(''));

// console.log(cell);
// for(let i = 0; i <= break_array[0]; i++){
//    text_array
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
