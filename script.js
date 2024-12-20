// fetching and displaying the weather in a Country 
let weather = {
    //85003a0bbdc3a50e6ee03456c2fdc06f
    "apikey": "AIzaSyBUGzHOJ0Eohu3MKqzbeWZ032L0ynt41uI",
    fetchWeather: function(city) {
        fetch(
            // https://api.openweathermap.org/data/2.5/weather?q=
           "https://airquality.googleapis.com/v1/currentConditions:lookup?"
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
      .then((data) => this.displayWeather(data));
        /*this code below is for searching(a thing that is different from weather) 
         weather in a country that does not exit which is not going to throw an error.
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));*/
    },
    displayWeather: function(data) {
     const { name } = data;
     const { icon, description } = data.weather[0];
      const { temp, humidity} = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
        // https://openweathermap.org/img/wn/
      document.querySelector(".icon").src = ""+ icon + ".png";
      document.querySelector (".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerHTML ="Humidity: " + humidity + "%";
      document.querySelector(".wind").innerHTML ="Wind speed : " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
  
},

    search: function(){
      this.fetchWeather(document.querySelector(".search-bar").value);
    }
};


document
.querySelector(".search button")
.addEventListener("click",function(){
  weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
 if(event.key == "Enter") {
    weather.search();
 }
})


weather.fetchWeather("Nigeria"); 



























