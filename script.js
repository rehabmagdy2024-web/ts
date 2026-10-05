
    const studentsArray = [];

    const form = document.getElementById("studentForm");
    const nameInput = document.getElementById("studentName");
    const ageInput = document.getElementById("age");
    const courseInput = document.getElementById("courseName");
    const gradeInput = document.getElementById("grade");
    const errorDiv = document.getElementById("error");

    const studentsSection = document.getElementById("studentsSection");
    const cardsContainer = document.getElementById("cardsContainer");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      errorDiv.textContent = "";

      const nameVal = nameInput.value.trim();
      const ageVal = ageInput.value.trim();
      const courseVal = courseInput.value.trim();
      const gradeVal = gradeInput.value.trim();

      
      if (!nameVal || !ageVal || !courseVal || !gradeVal) {
        errorDiv.textContent = "Please fill in all input fields.";
        return;
      }

      const gradeNum = Number(gradeVal);

     
      if (gradeNum < 0 || gradeNum > 100) {
        errorDiv.textContent = "Grade must be between 0 and 100.";
        return;
      }

     
      const statusVal = gradeNum >= 50 ? "Passed" : "Failed";

      
      const studentObj = {
        name: nameVal,
        age: ageVal,
        course: courseVal,
        grade: gradeNum,
        status: statusVal
      };

      studentsArray.push(studentObj);

   
      if (studentsSection.style.display !== "block") {
        studentsSection.style.display = "block";
      }

     
      const card = document.createElement("div");
      card.className = "glass-card student-card";
      
      const badgeClass = studentObj.status === "Passed" ? "passed" : "failed";

      card.innerHTML = `
        <p><strong>Student Name:</strong> ${studentObj.name}</p>
        <p><strong>Age:</strong> ${studentObj.age}</p>
        <p><strong>Course:</strong> ${studentObj.course}</p>
        <p><strong>Grade:</strong> ${studentObj.grade}</p>
        <p><strong>Status:</strong> <span class="badge ${badgeClass}">${studentObj.status}</span></p>
      `;

      cardsContainer.appendChild(card);

     
      form.reset();
    });
  