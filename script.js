// fetching and displaying the weather in a Country 
let weather = {
<<<<<<< HEAD
        "apikey": "85003a0bbdc3a50e6ee03456c2fdc06f",
      fetchWeather: function(city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
=======
    "apikey": "85003a0bbdc3a50e6ee03456c2fdc06f",
    fetchWeather: function(city) {
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q="
>>>>>>> parent of 135a15d (testing google apis)
            + city
            + "&units=metric&appid="
            + this.apikey
        )
        .then((response) => {
            if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data))
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
    },
    displayWeather: function(data) {
<<<<<<< HEAD
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        fetch("https://source.unsplash.com/1600x900/?" + name)
            .then((response) => {
                if (response.ok) {
                    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
                } else {
                    document.body.style.backgroundImage = "url('default-image-url.jpg')";
                }
            })
            .catch(() => {
                document.body.style.backgroundImage = "url('default-image-url.jpg')";
            });
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
=======
     const { name } = data;
     const { icon, description } = data.weather[0];
      const { temp, humidity} = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
      document.querySelector (".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerHTML ="Humidity: " + humidity + "%";
      document.querySelector(".wind").innerHTML ="Wind speed : " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
  
},

    search: function(){
      this.fetchWeather(document.querySelector(".search-bar").value);
>>>>>>> parent of 135a15d (testing google apis)
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Nigeria");














