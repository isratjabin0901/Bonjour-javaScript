// let arr = [
//   { "name": "John", "Id": 3890, "role": "Developer" },
//   { "name": "Alex", "Id": 2132, "role": "Manager" },
//   { "name": "Ana", "Id": 8976, "role": "Developer" },
//   { "name": "Sara", "Id": 6541, "role": "Analyst" },
//   { "name": "David", "Id": 1122, "role": "Tester" }
// ];


// function getEmp(role) {
//   return arr
//     .filter(emp => emp.role === role) // filter by role
//     .reduce((acc, emp) => {
//       acc[emp.name] = emp; // set employee name as key
//       return acc;
//     }, {});
// }

// let result = getEmp('Developer');
// console.log(result);


// // let people = [
// //   { name: "John", role: "Dev" },
// //   { name: "Alex", role: "Manager" },
// //   { name: "Ana", role: "Dev" }
// // ];

// // {
// //   Dev: [ { name: "John", role: "Dev" }, { name: "Ana", role: "Dev" } ],
// //   Manager: [ { name: "Alex", role: "Manager" } ]
// // }


let users = [
  { "name": "John", "Id": 3890, "role": "Developer" },
  { "name": "Alex", "Id": 2132, "role": "Manager" },
  { "name": "Ana", "Id": 8976, "role": "Developer" },
  { "name": "Sara", "Id": 6541, "role": "Analyst" },
  { "name": "David", "Id": 1122, "role": "Tester" }
];

/**
 * find the name from the array whose Id is greater than 5000 (use filter and map)
 * find the name from the array whose Id is greater than 5000 (use reduce)
 */

// const output = users.filter(x => x.Id > 5000).map(x => x.name);

// console.log(output);

// const output = users.reduce((acc , curr) => {

//     if(curr.Id > 5000) {
//          acc.push(curr.name);
//     }
//     return acc;
// }, []);

// console.log(output);

/**
 * let users = [
  { "name": "John", "Id": 3890, "role": "Developer" },
  { "name": "Alex", "Id": 2132, "role": "Manager" },
  { "name": "Ana", "Id": 8976, "role": "Developer" },
  { "name": "Sara", "Id": 6541, "role": "Analyst" },
  { "name": "David", "Id": 1122, "role": "Tester" }
];


 * write a function getEmp('Developer')

 * output = [
 *   { "name": "John", "Id": 3890, "role": "Developer" },
 *   { "name": "Ana", "Id": 8976, "role": "Developer" },
 * ]
 * 
 *  * output = {
 *  'John' :{"name": "John", "Id": 3890, "role": "Developer" },
 *  'Ana' : { "name": "Ana", "Id": 8976, "role": "Developer" }
 * 
 * }
 */

// function getEmp(role) {
//     return users.filter(users => users.role === role);
// }

// console.log(getEmp('Developer'));


function getEmp(role) {

    return users.reduce((acc, curr) => {
        if(curr.role === role) {
            acc[curr.name] = curr;
        }

        return acc;
    }, {})
}

console.log(getEmp('Developer'));





