const axios = require("axios");

function checkStrong(strongRandomPassword){
    let condition = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,8}$/; //REGEX condition for strong password 3-8 digits
    if(strongRandomPassword.match(condition)){
        return true;
    }else{
        return false
    }
}

async function getStrongRandomPassword(request, response) {
  let strongRandomPassword = ""; // contain at list 1 lowercase 1 uppercase 1 number
  let length = +request.url.substr(1);
  if (request.url === "/" || isNaN(length)) {
    length = 8;
  }

  for (let i = 1; i <= length; i++) {
    const response = await axios.get("http://localhost:3000");
    strongRandomPassword += response.data;
  }
 
  while(!checkStrong(strongRandomPassword)){
    strongRandomPassword= ""
    for (let i = 1; i <= length; i++) {
        const response = await axios.get("http://localhost:3000");
        strongRandomPassword += response.data;
      }
  }

  return strongRandomPassword

}

module.exports = getStrongRandomPassword;
