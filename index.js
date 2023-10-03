// // function to handle success
// function success() {
//     var data = JSON.parse(this.responseText); //parse the string to JSON
//     console.log(data);
// }

// // function to handle error
// function error(err) {
//     console.log('Request Failed', err); //error details will be in the "err" object
// }

function getWeather() {
      var city = document.getElementById('cityInput').value;
      var url = "https://goweather.herokuapp.com/weather/" + city;
      
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(data) {    
            var weatherCard = document.getElementById('weatherCard');
            var cityName = document.getElementById('cityName');
            var temperature = document.getElementById('temperature');
            var description = document.getElementById('description');
            var wind = document.getElementById('wind');
            
            cityName.textContent = city;
            temperature.textContent = data.temperature;
            description.textContent = data.description;
            wind.textContent = data.wind;
        },
        error: function(err) {
          console.log(err);
        }
      });
    }