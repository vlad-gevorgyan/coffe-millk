const values = {
  second: 0
};

const radioButtons = document.querySelectorAll('input[type="radio"]');
const average = document.querySelector("#average");

const changeValue = (e) => {
  const { name, value } = e.currentTarget;
  values[name] = value;
  average.innerText = value
};

radioButtons.forEach((radio) => radio.addEventListener("change", changeValue));
