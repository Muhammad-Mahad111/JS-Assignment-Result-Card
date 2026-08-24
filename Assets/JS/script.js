function resultCardGeneration(event) {
  event.preventDefault();

  // Student Info Object
  let student = {
    rollNumber: document.querySelector("#rollNumber"),
    fullName: document.querySelector("#fullName"),
    fatherName: document.querySelector("#fatherName"),
    studentClass: document.querySelector("#studentClass"),
  };

    // Result Card Object 
  let result = {
    math: document.querySelector("#math"),
    science: document.querySelector("#science"),
    computer: document.querySelector("#computer"),
    pakistanStudies: document.querySelector("#pakistanStudies"),
    english: document.querySelector("#english"),
    urdu: document.querySelector("#urdu"),
    remarks: document.querySelector("#remarks"),
  };

  // Checking empty fields
  let isValid = true;

  // Roll No
  if (student.rollNumber.value === "") {
    document.querySelector("#rollNumberError").innerHTML = "Required Field is not filled.";
    document.querySelector("#rollNumberError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#rollNumberError").innerHTML = "";
  }

  // Full name field
  if (student.fullName.value === "") {
    document.querySelector("#fullNameError").innerHTML = "Required Field is not filled.";
    document.querySelector("#fullNameError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#fullNameError").innerHTML = "";
  }

  // Father name field
  if (student.fatherName.value === "") {
    document.querySelector("#fatherNameError").innerHTML = "Required Field is not filled.";
    document.querySelector("#fatherNameError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#fatherNameError").innerHTML = "";
  }

  // Class field
  if (student.studentClass.value === "") {
    document.querySelector("#studentClassError").innerHTML = "Required Field is not filled.";
    document.querySelector("#studentClassError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#studentClassError").innerHTML = "";
  }

  // Math Field 
  if (result.math.value === "") {
    document.querySelector("#mathError").innerHTML = "Required Field is not filled.";
    document.querySelector("#mathError").style.color = "red";
    isValid = false;
  } else if (Number(result.math.value) < 0 || Number(result.math.value) > 100) {
    document.querySelector("#mathError").innerHTML = "Marks must be between 0 and 100.";
    document.querySelector("#mathError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#mathError").innerHTML = "";
  }

  // Science Field
  if (result.science.value === "") {
    document.querySelector("#scienceError").innerHTML = "Required Field is not filled.";
    document.querySelector("#scienceError").style.color = "red";
    isValid = false;
  } else if (Number(result.science.value) < 0 || Number(result.science.value) > 100) {
    document.querySelector("#scienceError").innerHTML = "Marks must be between 0 and 100.";
    document.querySelector("#scienceError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#scienceError").innerHTML = "";
  }

  // Computer Field
  if (result.computer.value === "") {
    document.querySelector("#computerError").innerHTML = "Required Field is not filled.";
    document.querySelector("#computerError").style.color = "red";
    isValid = false;
  } else if (Number(result.computer.value) < 0 || Number(result.computer.value) > 100) {
    document.querySelector("#computerError").innerHTML = "Marks must be between 0 and 100.";
    document.querySelector("#computerError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#computerError").innerHTML = "";
  }

  // Pakistan Studies Field
  if (result.pakistanStudies.value === "") {
    document.querySelector("#pakistanStudiesError").innerHTML = "Required Field is not filled.";
    document.querySelector("#pakistanStudiesError").style.color = "red";
    isValid = false;
  } else if (Number(result.pakistanStudies.value) < 0 || Number(result.pakistanStudies.value) > 100) {
    document.querySelector("#pakistanStudiesError").innerHTML = "Marks must be between 0 and 100.";
    document.querySelector("#pakistanStudiesError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#pakistanStudiesError").innerHTML = "";
  }

  // English Field
  if (result.english.value === "") {
    document.querySelector("#englishError").innerHTML = "Required Field is not filled.";
    document.querySelector("#englishError").style.color = "red";
    isValid = false;
  } else if (Number(result.english.value) < 0 || Number(result.english.value) > 100) {
    document.querySelector("#englishError").innerHTML = "Marks must be between 0 and 100.";
    document.querySelector("#englishError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#englishError").innerHTML = "";
  }

  // Urdu Field
  if (result.urdu.value === "") {
    document.querySelector("#urduError").innerHTML = "Required Field is not filled.";
    document.querySelector("#urduError").style.color = "red";
    isValid = false;
  } else if (Number(result.urdu.value) < 0 || Number(result.urdu.value) > 100) {
    document.querySelector("#urduError").innerHTML = "Marks must be between 0 and 100.";
    document.querySelector("#urduError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#urduError").innerHTML = "";
  }

  // Remarks
  if (result.remarks.value === "") {
    document.querySelector("#remarksError").innerHTML = "Required Field is not filled.";
    document.querySelector("#remarksError").style.color = "red";
    isValid = false;
  } else {
    document.querySelector("#remarksError").innerHTML = "";
  }

  // If the fields are empty stop the function
  if (isValid === false) {
    return;
  }

  // Calculate total marks 
  result.totalMarks = Number(result.math.value) + Number(result.science.value) + Number(result.computer.value) + Number(result.pakistanStudies.value) + Number(result.english.value) + Number(result.urdu.value);

  // Calculate percentage
  result.percentage = Math.floor((result.totalMarks / 600) * 100);

  // Grade system
  let grade = "";
  if (result.percentage >= 90) {
    grade = "A+";
  } else if (result.percentage >= 80) {
    grade = "A";
  } else if (result.percentage >= 70) {
    grade = "B";
  } else if (result.percentage >= 60) {
    grade = "C";
  } else if (result.percentage >= 50) {
    grade = "D";
  } else {
    grade = "Fail";
  }
  result.grade = grade;

  // Displaying Result Card 
  document.querySelector("#resultHeading").innerHTML = "Student Result Card";
  document.querySelector("#studentInformation").innerHTML = "Student Information";
  document.querySelector("#displayRollNumber").innerHTML = "Roll Number: " + student.rollNumber.value;
  document.querySelector("#displayFullName").innerHTML = "Full Name: " + student.fullName.value;
  document.querySelector("#displayFatherName").innerHTML = "Father Name: " + student.fatherName.value;
  document.querySelector("#displayClass").innerHTML = "Class: " + student.studentClass.value;
  document.querySelector("#subjectMarks").innerHTML = "Subject Marks";
  document.querySelector("#displayMath").innerHTML = "Math: " + result.math.value;
  document.querySelector("#displayScience").innerHTML = "Science: " + result.science.value;
  document.querySelector("#displayComputer").innerHTML = "Computer: " + result.computer.value;
  document.querySelector("#displayPakistanStudies").innerHTML = "Pakistan Studies: " + result.pakistanStudies.value;
  document.querySelector("#displayEnglish").innerHTML = "English: " + result.english.value;
  document.querySelector("#displayUrdu").innerHTML = "Urdu: " + result.urdu.value;
  document.querySelector("#finalResult").innerHTML = "Result";
  document.querySelector("#displayTotalMarks").innerHTML = "Total Marks: " + result.totalMarks + " / 600";
  document.querySelector("#displayPercentage").innerHTML = "Percentage: " + result.percentage + "%";
  document.querySelector("#displayGrade").innerHTML = "Grade: " + result.grade;
  document.querySelector("#displayRemarks").innerHTML = "Remarks by Teacher: " + result.remarks.value;
  
  // Cleaning Fields 
  student.rollNumber.value = "";
  student.fullName.value = "";
  student.fatherName.value = "";
  student.studentClass.value = "";
  result.math.value = "";
  result.science.value = "";
  result.computer.value = "";
  result.pakistanStudies.value = "";
  result.english.value = "";
  result.urdu.value = "";
  result.remarks.value = "";
}
