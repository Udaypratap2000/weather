import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import { red } from '@mui/material/colors';

export default function SearchBox ({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "d951e404beb9d757d395b3dbef799001";

   let getweatherInfo = async () => {
    try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
            let jsonResponse = await response.json();
            
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                
            };
            console.log(result);
            return result;
    }catch(err) {
        throw err;
    }
      
   };

    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let hundleSubmit = async(evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getweatherInfo();
            updateInfo(newinfo);
        }catch(err){
              setError(true);
        }   
    };
    return(
        <div className= "SearchBox">
           
            <form onSubmit={hundleSubmit}>
            <TextField id="city" 
            label="Ctiy Name" 
            variant="outlined" required value={city}
            onChange={handleChange}/>
            <br /> <br />
            <Button variant="contained" type='Submit'>Search </Button>
            {error && <p style={{color: "red"}}>No such place exist!</p> }
            </form>
        </div>
    )
}