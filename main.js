const buttonRandom = document.querySelector(".button-random");
const getRandomNumber = document.querySelector(".random-number");
const loader = document.querySelector(".loader");

function randomNumber() {
    const getMinNumberUser = document.querySelector(".mix-user");
    const userNumberMin = parseInt(getMinNumberUser.value);
    const getMaxNumberUser = document.querySelector(".max-user");
    const userNumberMax = parseInt(getMaxNumberUser.value);
    const userRandomNumber = Math.floor(Math.random() * (userNumberMax - userNumberMin + 1)) + userNumberMin;
    return userRandomNumber
}

function updateNumber() {
    getRandomNumber.style.display= "none";
    loader.style.display = "block";
    setTimeout(() => {
        loader.style.display = "none";
        const generateRandomNumber = randomNumber();
        if (isNaN(generateRandomNumber)) {
            getRandomNumber.textContent = "Введите значения!";
            getRandomNumber.style.display = "block";
            getRandomNumber.style.fontWeight = "400";
            return
        }
        getRandomNumber.style.fontWeight = "600";
        getRandomNumber.textContent = randomNumber();
        getRandomNumber.style.display = "block";
    }, 1000);
}

buttonRandom.addEventListener("click", (event) => updateNumber());
