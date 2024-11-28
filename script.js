let temperature = document.querySelector("#temperature");
let temp2 = document.querySelector("#temp2");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let input = document.querySelector("#city");
let btn = document.querySelector("#btn");
let imagediv = document.querySelector("#sunid");
let image1 = document.querySelector("#sun");

btn.addEventListener("click",myfunction);
function myfunction() {
    let city2 = input.value;
    const apikey = "61d251b6b6a5683607350ee1879cf17f";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city2}&appid=${apikey}`;

    async function checkweather() {
        try {
            const response = await fetch(apiurl);
            if (!response.ok) {
                // Display error if the city is not found or if there is another error
                document.querySelector(".error").style.display = "block";
                document.querySelector(".hide").style.display = "none"
                return;
            }
            const data = await response.json();
            // Update weather information here
            temperature.innerText = `${data.main.temp}°C`;
            temp2.innerText = data.name;
            humidity.innerText = `Humidity: ${data.main.humidity}%`;
            wind.innerText = `Wind: ${data.wind.speed} km/h`;

            // Set weather icon based on weather conditions
            if (data.weather[0].main === "Clouds") {
                image1.src = "cloudy.png";
            } else if (data.weather[0].main === "Clear") {
                image1.src = "sun.png";
            } else if (data.weather[0].main === "Rain") {
                image1.src = "rain.png";
            } else if (data.weather[0].main === "Drizzle") {
                image1.src = "drizzle.png";
            } else if (data.weather[0].main === "Mist") {
                image1.src = "mist.png";
            } else {
                image1.src = "sun.png"; // Default icon for other conditions
            }
            // Hide error message if any
            document.querySelector(".error").style.display = "none";
            document.querySelector(".hide").style.display = "block"


        } catch (error) {
            document.querySelector(".error").style.display = "block";
        }
    }

    checkweather();
}

    
        
    
            