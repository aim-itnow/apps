const URL = "https://api.weatherapi.com/v1/current.json?";
const apiKey = "d23fc15626134e9da9064602252202";
let q = "";

    
    let input = document.querySelector(".search #input")
    let btn = document.querySelector(".search #searchimg")

    async function checkWeather(q) {
        const response = await fetch(URL + "q=" + q + `&key=${apiKey}`);
        var data = await response.json();
        console.log(data);
        console.log(response.status);    

    document.querySelector(".cityname").innerHTML = data.location.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
};

btn.addEventListener("click",() => {
    checkWeather(input.value);
});
