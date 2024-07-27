document.addEventListener("DOMContentLoaded", () =>{
    const apiKey = "a44711624e7b15de5a767dd9e66e4833"
    const weatherButton = document.getElementById("get__weather")
    weatherButton.addEventListener("click", () =>{
        const city = document.getElementById("city__name").value
        if(city){
            getWeather(city, apiKey)
        }
    });
    async function getWeather(city, apiKey){
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        try{
          const response = await fetch(apiUrl)  
            if(!response.ok){
                throw new Error("Сеть не отвечает")
            }
            const data = await response.json()
            if(data.name && data.weather && data.main){
                document.getElementById("city").textContent = data.name
                document.getElementById("temp").textContent = data.main.temp
                document.getElementById("cond").textContent = data.weather[0].description
            } else{
                throw new Error("Неверные данные с сервера")
            }
        } catch(error){
            console.error("Ошибка при получении данных", error)
        }
        
    }
})