const fetch = require("node-fetch");

module.exports = async function (context, req) {
    const city = req.query.city;

    if (!city) {
        context.res = {
            status: 400,
            body: { error: "City query parameter is required" }
        };
        return;
    }

    const apiKey = process.env.WEATHER_API_KEY; // Securely stored in Azure

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        context.res = { body: data };
    } catch (error) {
        context.res = { status: 500, body: { error: "Error fetching weather data" } };
    }
};
