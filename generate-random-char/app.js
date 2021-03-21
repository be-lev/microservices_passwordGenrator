function getRandomChar(req, res){
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomCharsArray = randomChars.split("")
    const charIndex = Math.floor(Math.random() * randomCharsArray.length)
    return randomCharsArray[charIndex]

}

module.exports = getRandomChar