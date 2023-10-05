const key = "61cdf1a8f0fdec0cd33c9cb401b21509"

function showData(data){

    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor (data.main.temp) + "ºC"
    document.querySelector(".text-weather").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".icone-info")

    console.log(data)
}

async function searchCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    showData(data)
}


function clickbutton(){

    const city = document.querySelector(".input-city").value

    searchCity (city)

}

