//problem 1
let x = 20,
  y = 10;
console.log(`x= ${x}, y=${y}`);
[x, y] = [y, x];
console.log(`x= ${x}, y=${y}`);

//problem 2
function GetMaxMin(...arr) {
  //rest parameter
  let max = Math.max(...arr); //spread operator
  let min = Math.min(...arr);
  let res = [min, max];
  return res;
}
var result = GetMaxMin(1, 5, 90, 1000, 50);
//let [ResMin, ResMax] = result; //destruct
let [ResMin, ResMax] = [...result]; //spread
console.log(`Min value= ${ResMin}, Max Value= ${ResMax}`);

//problem 3
let student = {
  StdName: "Selvia Fayez",
  University: "Ain Shams",
  Faculty: "Computer Science",
  FinalGrade: "Very Good",
};
console.log(
  `${student.StdName} is a student in faculty of ${student.Faculty} in university ${student.University} And his final grad is ${student.FinalGrade}`
);

//problem 4
let ArrCountries = ["Egypt", "Egypt", "Germany", "Egypt", "Canada", "Japan"];
let arrsize = ArrCountries.length;
let anotherCountries = new Set(["France", "Denmark", "Italy", "Egypt"]);

//a) set not accept repeated names
let SetCountries = new Set(ArrCountries);
let setsize = SetCountries.size;

//b)display
console.log(...SetCountries);
for (let i of SetCountries) {
  console.log(i);
}

//c)
console.log("Repeated items= ", arrsize - setsize);

//d difference
function Difference(set1, set2) {
  const difference = new Set();
  for (const i of set1) {
    if (!set2.has(i)) {
      difference.add(i);
    }
  }
  return difference;
}
console.log("difference= ", ...Difference(SetCountries, anotherCountries));

//e)
let unionarr = new Set([...ArrCountries, ...anotherCountries]);
console.log("Union=", ...unionarr);

//problem 5
let courses1 = [
  { Coursename: "JavaScript", Grade: "Excellent" },
  { Coursename: "Jquery", Grade: "Good" },
  { Coursename: "React", Grade: "V.Good" },
  { Coursename: "ESNext", Grade: "Good" },
  { Coursename: "NodeJS", Grade: "V.Good" },
];
let courses2 = [
  { Coursename: "JavaScript", Grade: "V.Good" },
  { Coursename: "Jquery", Grade: "V.Good" },
  { Coursename: "React", Grade: "Good" },
  { Coursename: "ESNext", Grade: "Excellent" },
  { Coursename: "NodeJS", Grade: "Good" },
];
let courses3 = [
  { Coursename: "JavaScript", Grade: "Good" },
  { Coursename: "Jquery", Grade: "Good" },
  { Coursename: "React", Grade: "V.Good" },
  { Coursename: "ESNext", Grade: "V.Good" },
  { Coursename: "NodeJS", Grade: "Excellent" },
];
let std = new Map();
std.set("Selvia", courses1);
std.set("Sara", courses2);
std.set("Ali", courses3);
//a)
//display using for of
for (let i of std) {
  var divstd = document.getElementById("divstd");
  var h1std = document.createElement("h1");
  var pstd = document.createElement("p");
  divstd.appendChild(h1std);
  divstd.appendChild(pstd);
  h1std.innerText += `Student Name: ${i[0]} \n`;
  for (let j of i[1]) {
    pstd.innerText += `Course name: ${j.Coursename}, Grade: ${j.Grade} \n`;
  }
  pstd.innerText += `\n`;
}
//another way to display using for each & for in
std.forEach(function (value, key) {
  console.log(`Student Name: ${key} \n`);
  for (let x in value) {
    console.log(
      `Course name: ${value[x].Coursename}, Grade: ${value[x].Grade} \n`
    );
  }
});

//b)
var selectstd = document.getElementById("selectstd");

for (let i of std) {
  var optionstd = document.createElement("option");
  optionstd.innerText = i[0];
  selectstd.appendChild(optionstd);
}
function showDropInfo() {
  var Student = dropForm.dropSelect;
  var stdname = Student[Student.selectedIndex].text;

  for (let i of std) {
    if (stdname == i[0]) {
      var divstd = document.getElementById("stddata");
      var h1std = document.createElement("h1");
      var pstd = document.createElement("p");
      divstd.appendChild(h1std);
      divstd.appendChild(pstd);
      h1std.innerText += `Student Name: ${i[0]} \n`;
      for (let j of i[1]) {
        pstd.innerText += `Course name: ${j.Coursename}, Grade: ${j.Grade} \n`;
      }
      pstd.innerText += `\n`;
    }
  }
}
