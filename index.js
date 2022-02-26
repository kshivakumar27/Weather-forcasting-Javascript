  
var container = document.createElement("div");
container.setAttribute("class", "container");
document.body.append(container);

var row = document.createElement("div");
row.setAttribute("class", "row bg-dark");
container.append(row);

var hcol = document.createElement("div");
hcol.setAttribute("class", "col-12 text-center");
row.append(hcol);

var head = document.createElement("h1");
head.setAttribute("class", "text-light");
head.innerHTML = "Country Details";
hcol.append(head);

var data = fetch("https://restcountries.eu/rest/v2/all");

data
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    for (let i = 0; i < 250; i++) {
      var col = document.createElement("div");
      col.setAttribute("class", "col-sm-12 col-lg-4 mt-3");
      row.append(col);

      var card = document.createElement("div");
      card.setAttribute("class", "card ");
      card.setAttribute("style", "width: 18rem; background-image: linear-gradient(to right, lightgrey, grey);");
      col.append(card);

      var countrydiv=document.createElement("div");
      countrydiv.setAttribute("class","text-center bg-dark");
      card.append(countrydiv)

      var countryName = document.createElement("h5");
      countryName.setAttribute("class", "card-title text-light text-center");
      countryName.innerHTML = res[i].name;
      countrydiv.append(countryName);

      var img = document.createElement("img");
      img.setAttribute("src", "" + res[i].flag + "");
      img.setAttribute("class", "card-img-top");
      img.setAttribute("alt", "flag");
      card.append(img);

      var cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      card.append(cardBody);

      var capital = document.createElement("p");
      capital.setAttribute("class", "card-text text-dark text-center");
      capital.innerHTML = "Capital: "+ res[i].capital;
      cardBody.append(capital);

      var region = document.createElement("p");
      region.setAttribute("class", "card-text text-dark text-center");
      region.innerHTML = "Region: "+ res[i].region;
      cardBody.append(region);

      var pop = document.createElement("p");
      pop.setAttribute("class", "card-text text-dark text-center");
      pop.innerHTML = "Country Code: "+ res[i].alpha3Code;
      cardBody.append(pop);

      var wdiv=document.createElement("div");
      wdiv.setAttribute("class","text-center");
      cardBody.append(wdiv)

      var weather = document.createElement("button");
      weather.setAttribute("class", "btn btn-outline-secondary");
      weather.innerHTML = "weather";
      weather.addEventListener("click", function () {
        weatherData(res[i].name);
      });
      wdiv.append(weather);
    }
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });

function weatherData(name) {
  var wdata = fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      name +
      "&appid=cb1c65d19997141b94089fc2c795a476"
  );
  wdata
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      alert(
        "                      Weather Details"+
         "\nlongitude: " +
          res.coord.lon +
          "\nlatitude: " +
          res.coord.lat +
          "\nWeather description: "+
          res.weather[0].description +
          "\nTemparature: "+
          res.main.temp +
          "\nSunRise: "+
          res.sys.sunrise +
          "\nSunSet: "+
          res.sys.sunset +
          "\nWindSpeed: "+
          res.wind.speed +
          "\nTimeZone: "+
          res.timezone
      );
    })
    .catch(function (err) {
      console.log(err);
    });
}