import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useState } from "react";
import City from "./components/City";

function App() {
  const [city, setCity] = useState([]);
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getApi = async () => {
    try {
      const response = await axios({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d05a40a07d0a11705e0cd93dc33af6d5&units=metric`,
        method: "GET",
      });
  
      setCity([...city, response.data]);
    } catch (error) {
      console.log(error)
    }
  };

  console.log(city);

  return (
    <div className="App">
      <Header />
      <div>
        <input type="text" onChange={handleChange} value={value} className = "myinput"/>
        <button onClick={getApi} className = "mybutton">Add</button>
      </div>

      <div className="mylist">
        {city.map((item, index) => {
          return <City city={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
