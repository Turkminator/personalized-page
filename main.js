const apiKey = '0dceca0b3fa70427412ebc38874ea774';
const city = 'Bursa';
$.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, function(data) {
            const weatherInfo = `Weather report: ${data.main.temp}°C, ${data.weather[0].description}`;
            $('#weather').text(weatherInfo);
        });