const axios = require("axios");

async function getRandomPassword(request, response) {

    let randomPassword = "";

    let length = +request.url.substr(1);
    if(request.url === "/" || isNaN(length)) {
        length = 6;
    }

    for(let i = 1; i <= length; i++) {
        const response = await axios.get("http://localhost:3001");
        randomPassword += (response.data);
    }
    return randomPassword
}

module.exports = getRandomPassword;