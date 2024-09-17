const showHide = () => {
  const pass = document.getElementById("pass");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
};

const loginForm = () => {
  // Display the thank you message

  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;

  const msgClass = document.getElementsByClassName("msg")[0];

  //checks for above data
  if (!email || !pass) {
    msgClass.innerHTML = "please the credentials ";
    msgClass.style.color = "red";

    return;
  }

  // Check if passwords match
  // if (pass !== repeatPass) {
  //   msgClass.innerHTML = "Passwords do not match";
  //   msgClass.style.color = "red";
  //   return;
  // }

  // If all checks are correct then display success message
  msgClass.innerHTML = "Logged in Successfuly";
  msgClass.style.color = "green";

  // Hide the thank you message after 4 seconds
  setTimeout(() => {
    msgClass.innerHTML = "";
  }, 4000);

  //clearing the form after fillup
  document.getElementById("form").reset();
};
