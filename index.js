// Select DOM elements
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");
const ageSpan = document.getElementById("age");

// Function to calculate age based on the input date
function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday.");
        return;
    }

    const age = getAge(birthdayValue);
    
    if (age < 0) {
        alert("The birth date cannot be in the future. Please enter a valid date.");
        return;
    }

    ageSpan.innerText = age;
    resultEl.classList.add("visible");
}

// Helper function to compute age
function getAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Event listener for the button click
btnEl.addEventListener("click", calculateAge);
