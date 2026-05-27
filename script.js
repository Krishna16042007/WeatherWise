async function getWeather(){

let city = document.getElementById("city").value.trim();

let apiKey = "6bd8bf5d2d652800f159fb29d3326843";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

let response = await fetch(url);

let data = await response.json();

if(data.cod != 200){
throw new Error("City not found");
}

let icon = data.weather[0].icon;

document.getElementById("result").innerHTML = `

<h2>${data.name}</h2>

<img src="https://openweathermap.org/img/wn/${icon}@2x.png">

<p>🌡 Temperature: ${data.main.temp}°C</p>

<p>☁ Weather: ${data.weather[0].description}</p>

<p>💧 Humidity: ${data.main.humidity}%</p>

<p>🌬 Wind: ${data.wind.speed} m/s</p>

`;

}

catch(error){

document.getElementById("result").innerHTML =
"<p>❌ City not found</p>";

}

}