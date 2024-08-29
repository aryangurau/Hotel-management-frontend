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
  // Display the thank you message
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const repeatPass = document.getElementById("repeatPass").value;
  const msgClass = document.getElementsByClassName("msg")[0];

  //checks for above data
  if (!fullName || !email || !pass || !repeatPass) {
    msgClass.innerHTML = "please fillUp the form to continue";
    msgClass.style.color = "red";

    return;
  }

  // Check if passwords match
  if (pass !== repeatPass) {
    msgClass.innerHTML = "Passwords do not match";
    msgClass.style.color = "red";
    return;
  }

  // If all checks are correct then display success message
  msgClass.innerHTML = "Thankyou for Contacting us";
  msgClass.style.color = "green";

  // Hide the thank you message after 4 seconds
  setTimeout(() => {
    msgClass.innerHTML = "";
  }, 4000);

  //clearing the form after fillup
  document.getElementById("form").reset();
};
