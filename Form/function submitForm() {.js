function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById("surveyForm");
    if (form.checkValidity()) {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderOptions = document.querySelectorAll("input[name='gender']:checked");
        const gender = Array.from(genderOptions).map(checkbox => checkbox.value).join(', ');
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const popup = document.getElementById("popup");
        const popupResults = document.getElementById("popup-results");
        popupResults.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        popup.classList.remove("hidden");
        form.reset();
    } else {
        alert("Please fill out all the required fields.");
    }
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
}

function resetForm() {
    const form = document.getElementById("surveyForm");
    form.reset();
}
