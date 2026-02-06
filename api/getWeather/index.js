// api/getWeather/index.js
module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: { message: "Function is working!" }
    };
};
