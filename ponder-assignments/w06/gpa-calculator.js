//Isaac Moore
const generateButton = document.getElementById("submitButton");
generateButton.addEventListener("click", function() {
    const grades = getGrades();

    const gpa = calculateGpa(grades);
    outputeGpa(gpa);

});

function getGrades() {
    const input = document.getElementById("grades").value;
    const stringGrades = input.split(",");
    const grades = stringGrades.map((value) => value = parseInt(value));
    return grades;
}

function percentToletter(grade) {
    if (grade >= 90) {
        return "A";
    }
    else if (grade >= 80) {
        return "B";

    }
    else if (grade >= 70) {
        return "C";

    }
    else if (grade >= 60) {
        return "D";

    }
    else {
        return "F";
    }
}

function letterToGpa(letter) {
    if (letter == "A") {
        return 4.0;
    }
    else if (letter == "B") {
        return 3.0;
    }
    else if (letter == "C") {
        return 2.0;
    }
    else if (letter == "C") {
        return 1.0;
    }
    else {
        return 0.0;
    }
}

function calculateGpa(grades) {
    let letterGrades = []
    grades.forEach((grade) => {
        const letterGrade = percentToletter(grade);
        letterGrades.push(letterGrade);
    });
    let totalGpa = 0;
    letterGrades.forEach((grade) => totalGpa += letterToGpa(grade));
    const averageGpa = Math.round(totalGpa / letterGrades.length * 100) / 100;
    return averageGpa;
}

function outputeGpa(gpa) {
    const outputElement = document.createElement("p");
    outputElement.innerHTML = gpa;
    const body = document.querySelector("body");
    body.appendChild(outputElement);
}