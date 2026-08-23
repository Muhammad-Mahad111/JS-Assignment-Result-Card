function result(event) {
    event.preventDefault();

    let math = document.querySelector("#math");
    let science = document.querySelector("#sci");
    let computer = document.querySelector("#comp");
    let english = document.querySelector("#eng");

    let errorOut = document.querySelector("#errorOut");

    let inputs = [math, science, computer, english];
    let marks = [];

    for (let i = 0; i < inputs.length; i++) {
        
        let rawValue = inputs[i].value.trim();
        if (rawValue === "") {
            errorOut.innerText = "Error: One or more fields are empty!";
            console.log("Error: One or more fields are empty!");
            return;
        }

        let Values = Number(rawValue);
        if (Values >= 0 && Values <= 100) {
            marks.push(Values); 
        } else {
            errorOut.innerText = "Error: Please provide numbers from 0 to 100";
            console.log("Please provide numbers from 0 to 100");
            return; 
        }
    }
    errorOut.innerText = "";
    // console.log(marks);
   
    let result = {
        Math : Number(math.value),
        Science : Number(science.value),
        Computer : Number(computer.value),
        English : Number(english.value),
    }

    console.log("Math:" , result.Math)
    console.log("Science:" , result.Science)
    console.log("Computer:" , result.Computer)
    console.log("English:" , result.English)

    let total = result.Math + result.Science + result.Computer + result.English;
    console.log("Total:", total);

    let percentage = ((total/400)*100);
    console.log("Percentage:", percentage);

    
    let grade = "";
    if (percentage >= 90){
        grade = "A+";
    } else if (percentage >= 80){
        grade = "A";
    } else if (percentage >= 70){
        grade = "B";
    } else if (percentage >= 60){
        grade = "C";
    } else if (percentage >= 50){
        grade = "D";
    } else {
        grade = "Fail";
    }

    let marksOut = document.querySelector("#marksOut");
    let mathOut = document.querySelector("#mathOut");
    let sciOut = document.querySelector("#sciOut");
    let compOut = document.querySelector("#compOut");
    let engOut = document.querySelector("#engOut");
    let h2Result = document.querySelector("#h2Result");
    let totalOut = document.querySelector("#totalOut");
    let percentageOut = document.querySelector("#percentageOut");
    let gradeOut = document.querySelector("#gradeOut");

    marksOut.innerText = "Obtained Marks of Subjects: ";
    mathOut.innerText = "Math: " + result.Math;
    sciOut.innerText = "Science: " + result.Science;
    compOut.innerText = "Computer: " + result.Computer;
    engOut.innerText = "English: " + result.English;

    h2Result.innerHTML = "Result: ";
    totalOut.innerText = "Total: " + total;
    percentageOut.innerText = "Percentage: " + percentage.toFixed(2) + "%";
    gradeOut.innerText = "Grade: " + grade;

    math.value = "";
    science.value = ""; 
    computer.value = ""; 
    english.value = "";
}