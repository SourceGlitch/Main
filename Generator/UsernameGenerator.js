const btnEl = document.getElementById('btn');
const usernameEl = document.getElementById('username');
const newUsernameEl = document.getElementById('newUsername');

const characters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0,', '!', '@', '#', '$', '%', '^', '&', '&', '*', '(', ')']

btnEl.addEventListener('click', () => {
  const userInput = usernameEl.value;
  const randomCharacter = getRandomCharacter(4);
  newUsernameEl.innerText = userInput + randomCharacter;
})

function getRandomCharacter(length) {
    let result = ''; 
    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
}
return result;
}





