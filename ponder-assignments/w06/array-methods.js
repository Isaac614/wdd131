// Isaac Moore
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(ConvertToListElement);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

const gradeArray = ["A", "B", "C"];
const gpaArray = gradeArray.map(ConvertLetterGrade)
const gpaHtml = gpaArray.map(ConvertToListElement);
const gpaList = document.createElement("ul");
gpaList.innerHTML = gpaHtml.join("");
const body = document.querySelector("body");
body.appendChild(gpaList);


const totalGpa = gpaArray.reduce((total, gpa) => gpa + total, 0);
const averageGpa = totalGpa / gpaArray.length;

const averageGpaElement = document.createElement("p");
averageGpaElement.innerHTML = ` average gpa --> ${averageGpa}`;
body.appendChild(averageGpaElement);


const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredFruits = fruits.filter((fruit) => fruit.length < 6);
const filteredFruitsElement = document.createElement("ul");
filteredFruitsElement.innerHTML = filteredFruits.map(ConvertToListElement).join("");
console.log(filteredFruitsElement);
body.appendChild(filteredFruitsElement);


const nums = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = nums.indexOf(luckyNumber);
console.log(luckyIndex);
const luckyIndexElement = document.createElement("p");
luckyIndexElement.innerHTML = `The index of the lucky number is ${luckyIndex}`;
body.appendChild(luckyIndexElement);


function ConvertToListElement(text) {
    return `<li><p>${text}</p></li>`;
}

function ConvertLetterGrade(grade) {
    switch (grade.toUpperCase()) {
        case("A"):
            return 4.0;
            break;
        
        case("B"):
            return 3.0;
            break;
        
        case("C"):
            return 2.0;
            break;
        
        case("D"):
            return 1.0
            break;

        case("F"):
            return 0.0;
            break;
    }
}
// Isaac Moore