const axios = require("axios");

async function predict(data) {
    try {
        const res = await axios.post("http://127.0.0.1:5000/predict", data);
        return res.data;
    } catch {
        return { anomaly: false };
    }
}

module.exports = { predict };