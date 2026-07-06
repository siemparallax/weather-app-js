const key = "YOUR_API_KEY";

function getWeather() {
  var city = document.getElementById("city").value;

  if (city == "") {
    document.getElementById("result").innerText = "write city";
    return;
  }

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=metric")
  .then(res => res.json())
  .then(data => {
    if (data.cod == 200) {
      document.getElementById("result").innerText =
        data.name + " " + data.main.temp + "C " + data.weather[0].main;
    } else {
      document.getElementById("result").innerText = "not found";
    }
  })
  .catch(() => {
    document.getElementById("result").innerText = "error";
  });
}
