const axios = require("axios");
for(let i=1; i<=10; i++){
(async () => {
    const result = await axios.get("http://localhost:3002/3");
    const password = result.data;
    console.log(password);
})();
}