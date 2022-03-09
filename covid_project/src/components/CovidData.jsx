import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
  
function CovidData() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  
  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };
  
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  
  return (
    <div>
    <div>
    <h1 class='covid_data_title'>Live Covid Statistics</h1>
    
    <div className="covidData">
      <h1 class='enter'>Enter Country</h1><br/>
      <div className="covidData__input">
        <form onSubmit={handleSubmit}>
          {/* input county name */}
          <center>
          <input onChange={handleSearch} placeholder="Enter Country Name" />
          </center>
          <br/>
          <center>
          <button className="btn btn-outline-primary ms-2 px-4 rounded-pill" type="submit">Search</button>
          </center>
        </form>
      </div>
  
      {/* Showing the details of the country */}
      <div className="covidData__country__info">
        <b><p>Country Name : {country} </p>
  
        <p>Cases : {cases}</p>
  
        <p>Deaths : {deaths}</p>
  
        <p>Recovered : {recovered}</p>
  
        <p>Cases Today : {todayCases}</p>
  
        <p>Deaths Today : {deathCases}</p>
  
        <p>Recovered Today : {recoveredCases}</p></b>
      </div>
      <br/>
    </div>
   
    </div><br/><br/>
    <div class='spread'>
    <h3 class='covid_data_title'>How Can you help decreasing the numbers</h3>
    <p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.

Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. 
<br/>
The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.
<br/>
The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.</p>
<h3 class="cont">The following actions help prevent the spread of COVID-19, as well as other coronaviruses.</h3>
<p>
Wear a face mask in public indoor spaces.<br/>
Maintain at least six feet of distance between yourself and others.<br/>
Avoid large gatherings.<br/>
Socialize outdoors.<br/>
Get vaccinated and boosted as soon as you are eligible.<br/>
Avoid close contact with people who are sick.<br/>
Minimize touching your eyes, nose, and mouth.<br/>
Stay home when you are sick.<br/>
Cover your cough or sneeze with a tissue, then throw the tissue in the trash.<br/>
Clean frequently touched objects and surfaces regularly.<br/>
Wash your hands often with soap and water.</p>
    </div>
    </div>

  );
}
  
export default CovidData;