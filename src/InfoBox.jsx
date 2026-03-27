import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=900&auto=format&fit=crop&q=60";
  const HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=900&auto=format&fit=crop&q=60";
  const COLD_URL =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=900&auto=format&fit=crop&q=60";
  const RAINY_URL =
    "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
  const SUNNY_URL =
    "https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?w=900&auto=format&fit=crop&q=60";
  const CLOUDY_URL =
    "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?w=900&auto=format&fit=crop&q=60";
  const SNOWY_URL =
    "https://images.unsplash.com/photo-1702355520244-42f5344aec37?w=900&auto=format&fit=crop&q=60";
  const STORMY_URL =
    "https://images.unsplash.com/photo-1692721258401-f2afbefee031?w=900&auto=format&fit=crop&q=60";
  const WINDY_URL =
    "https://images.unsplash.com/photo-1505672678657-cc7037095e60?w=900&auto=format&fit=crop&q=60";
  const FOGGY_URL =
    "https://images.unsplash.com/photo-1635793902077-97d544d5c6b3?w=900&auto=format&fit=crop&q=60";
  const CLEAR_URL =
    "https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?w=900&auto=format&fit=crop&q=60";

  const getImage = () => {
    if (info.humidity > 80) return RAINY_URL;
    if (info.weather.toLowerCase().includes("cloud")) return CLOUDY_URL;
    if (info.weather.toLowerCase().includes("sunny")) return SUNNY_URL;
    if (info.weather.toLowerCase().includes("clear")) return CLEAR_URL;
    if (info.temp >= 30) return HOT_URL;
    if (info.temp <= 10) return SNOWY_URL;
    return INIT_URL;
  };

  return (
    <div className="CardContainer">
      <h1>Weather Information - {info.weather}</h1>
      <div className="infoCard">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={getImage()} title="Weather" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              <p>Temperature: {info.temp} °C</p>
              <p>Min Temperature: {info.temp_min} °C</p>
              <p>Max Temperature: {info.temp_max} °C</p>
              <p>Humidity: {info.humidity} %</p>
              <p>
                The Weather can be described as{" "}
                <i>{info.weather}</i> and feels like {info.feels_like} °C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
