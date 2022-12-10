import { ajax } from "../tools/ajax"

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        params:{
            q: city,
            appid: "683a187fe6779607a86f2200c5bc37eb",
            units: "metric",
        }
      };
    return await ajax(optionsRequest);
}