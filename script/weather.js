// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: '',
    woeid: '482940',
    unit: 'c',
    success: function(weather) {
      html = '<p class="weather-date">Today</p>';
      html += '<p class="weather-temp">'+weather.forecast[0].low
           +'/'+weather.forecast[0].high+'&deg;'
             +weather.units.temp+'</p><br>';
      
      for(var i=1;i<5;i++) {
      html += '<p class="weather-date">'+weather.forecast[i].date+'</p>';
      html += '<p class="weather-temp">'+weather.forecast[i].low
           +'/'+weather.forecast[i].high+'&deg;'
             +weather.units.temp+'</p><br>';
      }
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});