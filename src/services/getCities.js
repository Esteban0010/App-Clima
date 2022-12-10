import { ajax } from "../tools/ajax"

export const getCities = async countryCode => {
    const optionsRequest = {
        method: "GET",
        url: "https://spott.p.rapidapi.com/places",
        headers: {
            "X-RapidAPI-Key": "6ebf19a332msheb0f1505508211bp15258djsn84daa021764d",
            "X-RapidAPI-Host": "spott.p.rapidapi.com"
          },
        params:{
            limit: 10,
            type: "CITY",
            country: countryCode ?? "US",
        }
      };
    return await ajax(optionsRequest);
}