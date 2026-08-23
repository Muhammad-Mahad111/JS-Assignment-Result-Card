function resultCardGeneration(event) {
  event.preventDefault();
  // Student information object

  let student = {
    fullName: fullName.value,
    fatherName: fatherName.value,
    studentClass: studentClass.value,
  };

  // Result object
  let result = {
    math: Number(math.value),
    science: Number(science.value),
    computer: Number(computer.value),
    pakistanStudies: Number(pakistanStudies.value),
    english: Number(english.value),
    urdu: Number(urdu.value),
    remarks: remarks.value,
  };

  // Checking empty fields
  let isValid = true;

  // full name feild
  if (student.fullName === "") {
    fullNameError.innerHTML = "Required Field is not filled.";
    fullNameError.style.color = "red";
    isValid = false;
  } else {
    fullNameError.innerHTML = "";
  }

  // father name feild
  if (student.fatherName === "") {
    fatherNameError.innerHTML = "Required Field is not filled.";
    fatherNameError.style.color = "red";
    isValid = false;
  } else {
    fatherNameError.innerHTML = "";
  }

  // class feild
  if (student.studentClass === "") {
    studentClassError.innerHTML = "Required Field is not filled.";
    studentClassError.style.color = "red";
    isValid = false;
  } else {
    studentClassError.innerHTML = "";
  }

  // Math Feild
  if (math.value === "") {
    mathError.innerHTML = "Required Field is not filled.";
    mathError.style.color = "red";
    isValid = false;
  } else if (result.math < 0 || result.math > 100) {
    mathError.innerHTML = "Marks must be between 0 and 100.";
    mathError.style.color = "red";
    isValid = false;
  } else {
    mathError.innerHTML = "";
  }

  // Science Feild
  if (science.value === "") {
    scienceError.innerHTML = "Required Field is not filled.";
    scienceError.style.color = "red";
    isValid = false;
  } else if (result.science < 0 || result.science > 100) {
    scienceError.innerHTML = "Marks must be between 0 and 100.";
    scienceError.style.color = "red";
    isValid = false;
  } else {
    scienceError.innerHTML = "";
  }

  // Computer validation

  if (computer.value === "") {
    computerError.innerHTML = "Required Field is not filled.";
    computerError.style.color = "red";
    isValid = false;
  } else if (result.computer < 0 || result.computer > 100) {
    computerError.innerHTML = "Marks must be between 0 and 100.";
    computerError.style.color = "red";
    isValid = false;
  } else {
    computerError.innerHTML = "";
  }

  // Pakistan Studies validation

  if (pakistanStudies.value === "") {
    pakistanStudiesError.innerHTML = "Required Field is not filled.";
    pakistanStudiesError.style.color = "red";
    isValid = false;
  } else if (result.pakistanStudies < 0 || result.pakistanStudies > 100) {
    pakistanStudiesError.innerHTML = "Marks must be between 0 and 100.";
    pakistanStudiesError.style.color = "red";
    isValid = false;
  } else {
    pakistanStudiesError.innerHTML = "";
  }

  // English validation

  if (english.value === "") {
    englishError.innerHTML = "Required Field is not filled.";
    englishError.style.color = "red";
    isValid = false;
  } else if (result.english < 0 || result.english > 100) {
    englishError.innerHTML = "Marks must be between 0 and 100.";
    englishError.style.color = "red";
    isValid = false;
  } else {
    englishError.innerHTML = "";
  }

  // Urdu validation
  if (urdu.value === "") {
    urduError.innerHTML = "Required Field is not filled.";
    urduError.style.color = "red";
    isValid = false;
  } else if (result.urdu < 0 || result.urdu > 100) {
    urduError.innerHTML = "Marks must be between 0 and 100.";
    urduError.style.color = "red";
    isValid = false;
  } else {
    urduError.innerHTML = "";
  }

  // Remarks
  if (result.remarks === "") {
    remarksError.innerHTML = "Required Field is not filled.";
    remarksError.style.color = "red";
    isValid = false;
  } else {
    remarksError.innerHTML = "";
  }

  // If the feilds are empty stop the function
  if (isValid === false) {
    return;
  }

  // Calculate total marks
  result.totalMarks = result.math + result.science + result.computer + result.pakistanStudies + result.english + result.urdu;

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
  resultHeading.innerHTML = "Student Result Card";
  studentInformation.innerHTML = "Student Information";
  displayFullName.innerHTML = "Full Name: " + student.fullName;
  displayFatherName.innerHTML = "Father Name: " + student.fatherName;
  displayClass.innerHTML = "Class: " + student.studentClass;
  subjectMarks.innerHTML = "Subject Marks";
  displayMath.innerHTML = "Math: " + result.math;
  displayScience.innerHTML = "Science: " + result.science;
  displayComputer.innerHTML = "Computer: " + result.computer;
  displayPakistanStudies.innerHTML = "Pakistan Studies: " + result.pakistanStudies;
  displayEnglish.innerHTML = "English: " + result.english;
  displayUrdu.innerHTML = "Urdu: " + result.urdu;
  finalResult.innerHTML = "Result";
  displayTotalMarks.innerHTML = "Total Marks: " + result.totalMarks + " / 600";
  displayPercentage.innerHTML = "Percentage: " + result.percentage + "%";
  displayGrade.innerHTML = "Grade: " + result.grade;
  displayRemarks.innerHTML = "Remarks by Teacher: " + result.remarks;
  
  // Cleaning Feilds
  fullName.value = "";
  fatherName.value = "";
  studentClass.value = "";
  math.value = "";
  science.value = "";
  computer.value = "";
  pakistanStudies.value = "";
  english.value = "";
  urdu.value = "";
  remarks.value = "";
}
