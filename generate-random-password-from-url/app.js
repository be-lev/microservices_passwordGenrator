const axios = require("axios");

(async () => {
    const result = await axios.get("http://localhost:3002/3");
    const password = result.data;
    console.log(password);
})();
