const userLogin = async () => {
  try {
    const payload = {
      username:document.getElementById("username").value,
      password:document.getElementById("pass").value,
      
    };
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;
    const msgClass = document.getElementsByClassName("msgClass")[0];
  
    //checks for above data
    if (!username|| !pass) {
      msgClass.innerHTML = "please enter valid credentials ";
      msgClass.style.color = "red";
      return;
    }
    setTimeout(() => {
        msgClass.innerHTML = "";
      }, 4000);
    
    const { data } = await axios.post(
      "https://dummyjson.com/auth/login",
      payload
    );

    if(true){
    msg=document.getElementById("msg")
    msg.innerHTML=`login successfull <br> welcome ${data.username}`
    msg.style.color="green";
    
    setTimeout(() => {
        msg.innerHTML = "";
      }, 4000);
}
        //clearing the form after fillup
        document.getElementById("reset-form").reset();
      
          } catch (err) {
    if (err.response && err.response.status === 400) {
        document.getElementById("msg").innerHTML = "Incorrect username or password. Please try again.";
      } else {
        document.getElementById("msg").innerHTML = "An error occurred. Please try again later.";
      }
    console.error(err);
  }
  
};

// fetchData();


const showHide = () => {
    const pass = document.getElementById("pass");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  };
  
//   const loginForm = () => {
    
//     const email = document.getElementById("email").value;
//     const pass = document.getElementById("pass").value;
  
//     const msgClass = document.getElementsByClassName("msg")[0];
  
//     //checks for above data
//     if (!email || !pass) {
//       msgClass.innerHTML = "please the credentials ";
//       msgClass.style.color = "red";
  
//       return;
//     }

//     // If all checks are correct then display success message
//     msgClass.innerHTML = "Logged in Successfuly";
//     msgClass.style.color = "green";
  
//     // Hide the thank you message after 4 seconds
//     setTimeout(() => {
//       msgClass.innerHTML = "";
//     }, 4000);
  
//     //clearing the form after fillup
//     document.getElementById("form").reset();
//   };
  