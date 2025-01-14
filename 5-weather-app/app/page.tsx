"use client";

import {useState} from "react";
import {
    Cloud,
    CloudDrizzle,
    CloudLightning, CloudRain, Droplet,
    Search,
    Snowflake,
    Sun, Tornado,
    Waves,
    WindArrowDown,
    WindIcon
} from "lucide-react";
import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = process.env.API_KEY;

type WeatherData = {
  name: string,
  country: string,
  date: Date,
  temperature: number,
  description: string,
  windSpeed: string,
  humidity: string,
  pressure: string,
};


const weatherIcons = {
    "thunder": <CloudLightning size={60} />,
    "drizzle": <CloudDrizzle size={60} />,
    "snow": <Snowflake size={60} />,
    "rain": <CloudRain size={60} />,
    "clouds": <Cloud size={60} />,
    "tornado": <Tornado size={60} />,
    "clear": <Sun size={60} />,
    "mist": <Waves size={60} />,
}

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [input, setInput] = useState("");
  const [weatherIcon, setWeatherIcon] = useState<string>("");

  const handleSearch = async () => {
      try {
          const response = await axios.get(`${BASE_URL}q=${input}&appid=${API_KEY}&units=metric`, {
              // headers: {
              //   "X-Api-Key": API_KEY,
              // }
          });
          const data = await response.data;
          console.log(data);
          setData({
              name: data.name,
              country: data.sys.country,
              date: new Date(),
              temperature: data.main.temp,
              description: data.weather[0].main,
              windSpeed: data.wind.speed + "m/s",
              humidity: data.main.humidity + "%",
              pressure: data.main.pressure + "mb"
          });

          getWeatherIcon(data.weather[0].id);
      } catch(e) {
          console.error(e);
      }
  }

  const getWeatherIcon = (code: number) => {
      if (200 <= code && code < 300) {
          setWeatherIcon("thunder");
      } else if (300 <= code && code < 400) {
          setWeatherIcon("drizzle");
      } else if (code === 511) {
          setWeatherIcon("snow");
      }  else if (500 <= code && code < 600) {
          setWeatherIcon("rain");
      } else if (600 <= code && code < 700) {
          setWeatherIcon("snow");
      } else if (code === 781) {
          setWeatherIcon("tornado")
      } else if (700 <= code && code < 800) {
          setWeatherIcon("mist");
      } else if (code === 800) {
          setWeatherIcon("clear");
      } else {
          setWeatherIcon("clouds");
      }
  }

  return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-cover w-full bg-no-repeat" style={{backgroundImage: "url(/bg_image.png)"}}>
        <div className="p-4 bg-blue-300 shadow-lg flex flex-col rounded-lg mx-4 my-4 max-w-2xl w-full">
          <div className="flex space-x-10 mb-3">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 rounded-lg"
            />
            <button
                onClick={handleSearch}
                className="px-5 py-1 text-xl bg-blue-400 text-white hover:bg-blue-500 rounded-lg"
            >
              <Search />
            </button>
          </div>

          {data != null &&
          <div className="flex items-center flex-col mb-6">
            <h2 className="font-bold text-2xl mb-3">{data.name}, {data.country}</h2>
            <h4 className="italic font-normal text-lg mb-8">{data.date.toDateString()}</h4>
            <div className="flex justify-center mb-4">
                {weatherIcons[weatherIcon]}
              <h1 className="text-5xl font-extrabold ml-5">{data.temperature}</h1>
              <h2 className="justify-self-start font-bold text-3xl">°C</h2>
            </div>
            <span className="text-red-600 text-lg mb-4">{data.description}</span>
            <div className="flex justify-around w-full">
              <div className="flex space-x-3">
                <WindIcon className="h-full" size={38}/>
                <div>
                  <h4 className="text-xl font-semibold">{data.windSpeed}</h4>
                  <h4 className="text-xl font-semibold">Wind Speed</h4>
                </div>
              </div>
              <div className="flex space-x-3">
                <Droplet className="h-full" size={38}/>
                <div>
                  <h4 className="text-xl font-semibold">{data.humidity}</h4>
                  <h4 className="text-xl font-semibold">Humidity</h4>
                </div>
              </div>
              <div className="flex space-x-3">
                <WindArrowDown className="h-full" size={38}/>
                <div>
                  <h4 className="text-xl font-semibold">{data.pressure}</h4>
                  <h4 className="text-xl font-semibold">Pressure</h4>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
  );
}
