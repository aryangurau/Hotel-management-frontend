import { useState } from "react";

const InterviewHooks = () => {
  const countries = [
    { name: "India", cities: ["Mumbai", "New Delhi"] },
    { name: "Nepal", cities: ["kathmandu", "Pokhara"] },
  ];
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
        <h1>Interview</h1>
      <select onChange={(e) => {setCountry(e.target.value); setCity("");}}>
        <option value="">select the country</option>
        {countries.map((country) => {
          return (
            <option key={country?.name} value={country?.name}>
              {country?.name}
            </option>
          );
        })}
      </select>

      {country && (
        <select onChange={(e)=>setCity(e.target.value)}>
          <option value="">Select City</option>
          {countries.find((data)=>data.name===country).cities.map((city,index)=>{
            return(
                <option key={index} value={city}>{city}</option>
            )
          })}
        </select>
      )}
      {country && city &&(
        <div> you have  selected {country} country & {city} city </div>
      )}
    </div>
  );
};

export default InterviewHooks;

