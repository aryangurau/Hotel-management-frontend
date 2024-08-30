const fetchData = async () => {
  try {
    const result = await fetch("https://dummyjson.com/users");
    const data = await result.json();

    const { users = [] } = data;
    const firstNames = users.map((user) =>
      user.firstName.concat("", user.lastName)
    );
    //print the result in HTML
    let newHTML = "";
    newHTML += "<ol>";
    firstNames.forEach((user) => (newHTML += `<li> ${user}</li>`));
    newHTML += "</ol>";
    document.getElementById("Allusers").innerHTML = newHTML;
  } catch (err) {
    console.error;
  }
};


