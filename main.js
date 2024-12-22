const buttonRandom = document.querySelector(".button-random");

function randomNumber() {
    const getMinNumberUser = document.querySelector(".mix-user");
    const userNumberMin = parseInt(getMinNumberUser.value);
    const getMaxNumberUser = document.querySelector(".max-user");
    const userNumberMax = parseInt(getMaxNumberUser.value);
    const randomNumber = Math.floor(Math.random() * (userNumberMax - userNumberMin + 1)) + userNumberMin;
    console.log(randomNumber);
    
}

buttonRandom.addEventListener("click", (event) => randomNumber());
