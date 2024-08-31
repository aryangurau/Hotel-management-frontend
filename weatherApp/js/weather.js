const showWeather = async () => {
  try {
    const { data } = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=27.15&longitude=85.9&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,rain,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum&timezone=auto"
    );

    console.log(data);
    // Extracting the hourly data from the API response
    const { hourly } = data;
    console.log("hourly", hourly);
    const { current } = data;
    console.log("current", current);
    const visibility = hourly.visibility;
    console.log("visibility", visibility);
    // Get the current date and time in ISO format
    const currentDateTime = current.time;
    console.log("currentDate&Time", currentDateTime);

    // const currentDateTime = now.toISOString().slice(0, 14); // Example: "2024-08-31T09:16"

    // Find the index of the current time in the API response
    const times = hourly.time;
    const currentIndex = times.findIndex((time) =>
      time.startsWith(currentDateTime.slice(0, 14))
    );
    const wind_speed = current.wind_speed_10m;
    console.log("wind_speed_10m", wind_speed);

    const humidity = current.relative_humidity_2m;
    console.log("humidity", humidity);
 
    

   if(document
    .getElementById("datalistOptions")===true){
        document
  .getElementById("datalistOptions")
  .addEventListener("onchange", showWeather);
    }
else {  document.getElementById("not-found").innerHTML="city not found"}

    if (currentIndex !== -1) {
      // Get the current time and temperature
      const currentTime = times[currentIndex];
      const currentTemperature = hourly.temperature_2m[currentIndex];

      // Display the current date and time
      document.getElementById(
        "timeData"
      ).innerHTML = `<p>Current Time: ${currentTime}</p>`;

      // Display the current  temperature
      document.getElementById(
        "weather-degree"
      ).innerHTML = `<p> ${currentTemperature}°C</p>`;

      document.getElementById(
        "wind_speed"
      ).innerHTML = `<p> ${wind_speed} km/hr</p>`;

      document.getElementById(
        "humidity"
      ).innerHTML = `<p> ${humidity} km/hr</p>`;
    } else {
        document.getElementById(
            "weather-degree"
          ).innerHTML = `<p>Temperature data not available</p>`;
      document.getElementById(
        "timeData"
      ).innerHTML = `<p>Current time data not available</p>`;
     
      document.getElementById(
        "wind_speed"
      ).innerHTML = `<p>wind speed data not available</p>`;

      document.getElementById(
        "humidity"
      ).innerHTML = `<p> Humidity data not available</p>`;
      
    }

    // For debugging purposes
    console.log("CurrentDateTime:", currentDateTime);
    console.log("Current Index:", currentIndex);
    console.log("Current Time:", times[currentIndex]);
    console.log("Current Temperature:", hourly.temperature_2m[currentIndex]);
  } catch (err) {
    console.error("Error fetching weather data:", err);
  }
};

// Call the function to show the current weather
showWeather();
