const showHide = () => {
  const pass = document.getElementById("pass");
  const repeatPass = document.getElementById("repeatPass");
  if (pass.type === "password" || repeatPass.type === "Password") {
    pass.type = "text";
    repeatPass.type = "text";
  } else {
    pass.type = "password";
    repeatPass.type = "password";
  }
};
const submitForm = () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const repeatPass = document.getElementById("repeatPass").value;
  const msgClass = document.getElementsByClassName("msg")[0];
  const pwClass = document.getElementsByClassName("pw")[0];

  // Check for missing data
  if (!firstName || !lastName || !email || !pass || !repeatPass) {
    msgClass.innerHTML = "Please fill up the form to continue";
    msgClass.style.color = "red";
    return;
  }

  // Check if passwords match
  if (pass !== repeatPass) {
    pwClass.innerHTML = "Passwords do not match";
    pwClass.style.color = "red";
    return;
  }

  // If all checks are correct, display success message
  msgClass.innerHTML = "Thank you for contacting us";
  msgClass.style.color = "green";

  // Hide the thank you message after 4 seconds
  setTimeout(() => {
    msgClass.innerHTML = "";
  }, 4000);

  // Clear the form after successful submission
  document.getElementById("form").reset();
};

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
