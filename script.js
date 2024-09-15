
// Part_one refactorcode

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// console.log(cell5, cell6, cell7, cell8);
let counter_c = 0

let counter_n =0

let b_counter = 0

 let test_string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

//let test_string = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"


let text=""



for (let i_t =0; i_t < test_string.length; i_t++)
{
    // console.log(test_string[i_t])
    text += test_string[i_t] ;

    if (test_string[i_t] ==",")
        {

    counter_c += 1
            
            // if(b_counter > counter_c )
            //     {
            //         b_counter += 1
            //         break
            //     }
    

    }

 

   if (test_string[i_t] =="\n")
    {

    counter_n += 1

}



}



// // Add 1 to count since each initial row has a free cell

let true_count_cells = counter_c + counter_n

// console.log(true_count_cells)

let cells ={}
let text2 =""
let cellcount = 0
let escapechar ="\n"
let fulltext =""
let text3 = ""

console.log("-p1----------------------------------------")
// for (let x = 0; x <=true_count_cells-18; x++){
    // console.log(x);
    // cells += "cell"+x+","

    outerloop:
    for (let x = 0; x <= test_string.length; x++){
    let internal_counter = 0;
   
     text2 =""

    
        for (let i_t =x; i_t <= test_string.length; i_t++)
        {


                text2 += test_string[i_t] 

                

                if (test_string[i_t+1] =="," || test_string[i_t+1] =="\n" || test_string[i_t+1] ==undefined  )
                    {   

                        internal_counter += 1
                        i_t += 1
                       
                        x = i_t 
                        
                        // console.log(x+"xflag")

                        if( test_string[i_t] =="\n"){
                         
                            cells[+cellcount] =text2 //+ escapechar
 
                             text2 += " "
                             fulltext += text2 //+escapechar
                             cellcount += 1

                            text3 += "cell"+cellcount+"="+"'"+text2+"'" +"; "
                            continue outerloop;
                        } 
                        else{
                            cells[cellcount] =text2
                             text2 += " "
                        fulltext += text2 
                        cellcount += 1
                        
                            text3 += "cell"+cellcount+"="+"'"+text2+"'" +"; "
                        continue outerloop;
                        }
                    }
            }
        }    
// console.log(cells[0], cells[1], cells[2], cells[3]);
// console.log(cells[4], cells[5], cells[6], cells[7]);
// console.log(cells[8], cells[9], cells[10], cells[11]);
// console.log(cells[12], cells[13], cells[14], cells[15]);
// console.log(cells[16], cells[17], cells[18], cells[19]);


console.log("-----------------------------------------")

eval(text3) //there's probably a better way to set a list of variables, was trying not to use an array


// for (let i = 0; i < 4; i++) {
//     let start = i * 4 + 1;
//     console.log(`console.log(cell${start}, cell${start + 1}, cell${start + 2}, cell${start + 3});`);
// To generate the requested format from console.log(cell1, cell2, cell3, cell4);

console.log(cell1, cell2, cell3, cell4);
console.log(cell5, cell6, cell7, cell8);
console.log(cell9, cell10, cell11, cell12);
console.log(cell13, cell14, cell15, cell16);
console.log(cell17, cell18, cell19, cell20);





//Part 2

//... see part 1?
console.log("p2=====================================");

const sample_text_1 ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const sample_text_2b ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"



//console.log("Hello World and test");

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

console.log("p3=====================================");

let args = sample_text_1.split(/[\n,]/);



//Transforming the text into a 2D array
function transform(text) {
    let row_transform = text.split('\n')
    for (let i = 0; i < row_transform.length; i++) {
        row_transform[i] = row_transform[i].split(',')
    }
    return row_transform
}
// let row_transform = sample_text_1.split('\n')
// for (let i = 0; i < row_transform.length; i++) {
//     row_transform[i] = row_transform[i].split(',')
// }
//console.log(transform(sample_text_1));

// Transforming the text into an array of objects with the first row as keys
function transformToObject(text) {
    let rows = text.split('\n');
    let keys = rows[0].split(',');
    let csv_object= [];


    for (let i = 1; i < rows.length; i++) {
        let values = rows[i].split(',');
        let obj = {};
        for (let j = 0; j < keys.length; j++) {
            obj[keys[j]] = values[j];
        }
        csv_object.push(obj);
    }

    return csv_object;
}

console.log(transformToObject(sample_text_1));

// Part 3 with done differently




const rowObjects = row.map((row, index) => {    
    const [id, name, occupation, age] = row;
    return { id, name, occupation, age };
})

// console.log(rowObjects);






//Bill line is strangely formatted, but not extra characters exist in the string. I will leave it as is for now. I will fix it later if it becomes a problem.


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


console.log("p4=====================================");

let shifted = rowObjects.shift();
let popped = rowObjects.pop();

// console.log(rowObjects);
//console.log(popped);


rowObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

rowObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

//output table for part four with modifications
console.log(rowObjects);



// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
let totalAge=0;
let averageAge;
let number_of_people = rowObjects.length;

for (let i = 1; i < number_of_people; i++) {
    totalAge += Number(rowObjects[i].age);
}

// console.log(rowObjects[1].age);
// console.log(totalAge);
averageAge = totalAge / number_of_people;

console.log(averageAge +" is the average age of the group.");






// Part 5

// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!
// Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.
console.log("p5=====================================");
const copy_of_new_object = [...rowObjects];
//console.log(copy_of_new_object);
let heading=(Object.keys(rowObjects[0]))
let to_csv = [];
let new_row = [];
for (i in copy_of_new_object){

    if (i == 0){
    new_row =(Object.keys(rowObjects[0]))
    
    // console.log(first_row+" is the heading");

    to_csv.push(new_row);
    new_row = [];
    let temp = copy_of_new_object[i];
    for (j in heading){
   new_row.push(temp[heading[j]]);

    }
    to_csv.push(new_row);
    new_row = [];
    }
    else{   if (i != 0){
        let temp = copy_of_new_object[i];
        for (j in heading){
 
       new_row.push(temp[heading[j]]);

        }

    }
    to_csv.push(new_row);
    new_row = [];

    }
}

// All the way back to a string
console.log(to_csv);
let new_test_csv = to_csv.join('/n');
console.log(new_test_csv);

// console.log(to_csv.toString());
//both methods work


// for(i in heading){
//     let temp = rowObjects[i];
//     console.log(temp[heading[i]]);
// }

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
