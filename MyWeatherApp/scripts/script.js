const form = document.querySelector("form");
const detail = document.querySelector(".detail");
const card = document.querySelector(".card");

const timeImg = document.querySelector("img.time");

const icon = document.querySelector(".icon img");



const updateUI = (value) => {
    let cityDetail = value.cityDetail;
    let weatherForecast = value.weatherDetail;



    detail.innerHTML = ` 
    <div class="text-uppercase text-center detail">
    <h5 class="city-name my-3 ">${cityDetail.LocalizedName}</h5>
    <div class="city-weather my-3">${weatherForecast.WeatherText}</div>
    <div class= "display-5 my-4">
        <span class="city-temperature">${weatherForecast.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    </div>
    `

    const iconSrc = `img/icons/${weatherForecast.WeatherIcon}.svg`;
    icon.setAttribute("src",iconSrc);
    

     let timeSrc = null;
     if(weatherForecast.IsDayTime == true){
         timeSrc = "img/day.3gp";
     }else{
        timeSrc = "img/night.3gp";

     };

     timeImg.setAttribute("src",timeSrc);

    


    // let cityName = detail.querySelector(".city-name");
    // cityName.textContent = cityDetail.LocalizedName;

    // let weatherUI =detail.querySelector(".city-weather");
    // weatherUI.textContent = weatherForecast.WeatherText;

    // let temperature = detail.querySelector(".city-temperature");
    // temperature.textContent  = weatherForecast.Temperature.Metric.Value;





}

    form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = form.city.value.trim();
    console.log(city);

    updateCity(city).
        then(value => {
            updateUI(value);


    })

    form.reset();
});



const updateCity = async (city) => {
    const cityDetail = await getCity(city);
    const weatherDetail = await getWeather(cityDetail.Key);

    return {
        cityDetail,
        weatherDetail
    }

}
