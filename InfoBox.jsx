import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Thunderstorm from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const INIT_URL = 
  "https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.jpg?s=2048x2048&w=is&k=20&c=o9U7YDkRj4pdC8OWg54GJkxGy8vcpqZ_Yur5liP965M=";
   
  const HOT_URL = 
  "https://media.istockphoto.com/id/1010630506/photo/rural-india-landscape-village-kids-playing-cricket-outdoor-on-playground-with-one-tree-area.jpg?s=2048x2048&w=is&k=20&c=wl55BG-67QcLmmIC-aKxKEj6jDflD7U58S7IKZwpJFk=";
  const COLD_URL =
  "https://images.unsplash.com/photo-1668418321923-becc3ef20077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
   "https://media.istockphoto.com/id/902497530/photo/cars-driving-on-wet-road-in-the-rain-with-headlights.jpg?s=2048x2048&w=is&k=20&c=dawggjlenC9kMqXBcznFVmzdNaiLyj51QeGncJ20ZJE=";
  
    return(
      <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
          ? RAIN_URL
          : info.temp > 15
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80
          ? <Thunderstorm/>
          : info.temp > 15
          ?<WbSunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2"  color= 'text.secondary'   component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;</p>
         <p>Max Temp = {info.tempMax}&deg;</p>
         <p>The weather can be described as <i>{info.weather}</i>
          and feels like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
      </div>
    );
}