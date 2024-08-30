// const fetchData = async () => {
//     try {
//       const { data } = await axios.get("https://dummyjson.com/users");

//       const { users = [] } = data;
//       const firstNames = users.map((user) =>
//         user.firstName.concat("", user.lastName)
//       );
//       //print the result in HTML
//       let newHTML = "";
//       newHTML += "<ol>";
//       firstNames.forEach((user) => (newHTML += `<li> ${user}</li>`));
//       newHTML += "</ol>";
//       console.log(newHTML)
//       document.getElementById("Allusers").innerHTML = newHTML;
//     } catch (err) {
//       console.error;
//     }
//   };

const fetchData = async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/users");

    const { users = [] } = data;

    // Create an array of full names
    const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);

    // Create list items in HTML
    const listItems = fullNames.map((name) => `<li>${name}</li>`).join("");
    console.log(listItems);

    // Insert the list into the webpage
    document.getElementById("Allusers").innerHTML = `<ol>${listItems}</ol>`;
  } catch (err) {
    console.error(err);
  }
};

// fetchData();
