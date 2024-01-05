import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function InfoBox({info}) {

    const INIT_IMG_URl = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1590305840790-4a8c70c67d43?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuJTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://thumbs.dreamstime.com/z/sun-set-mountains-winter-cold-scenery-rise-shine-wawes-snow-54426473.jpg";
    const RAIN_URL = "https://i.pinimg.com/736x/26/04/47/26044718a71b247fb6492d16c5c6b9c7.jpg";

    return (
        <div className="InfoBox">
            
            <div className="cardContainer" >
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <LightModeIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} > 
        <p> Temperature - {info.temp}&deg;C </p>
        <p> Humidity - {info.humidity} </p>
        <p>Min Temp  - {info.tempMin} </p>
        <p>Max Temp  - {info.tempMax} </p>
        <p>The weather can be described as <b><i>{ info.weather }</i></b> and feels like   <b>{info.feelsLike}&deg;C</b> </p>
        </Typography>
      </CardContent>
    </Card> 
    </div>
        </div>
    )
}



