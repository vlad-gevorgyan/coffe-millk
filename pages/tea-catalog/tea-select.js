let select = function () {
  const cardItems = document.querySelectorAll(".tea-card"),
  prices3 = document.querySelectorAll(".tea-price3"),
  selects = document.querySelectorAll("select");

const baseCost = 100; // коэффициент базовой цены

const basePrices1 = {}, // сохраняем начальные цены
  basePrices3 = [];

prices3.forEach((item) => basePrices3.push(item.innerText));

selects.forEach((item, idx) => {
  item.addEventListener("change", () => {
    let cost = (parseInt(basePrices3[idx], 10) * item.value) / baseCost;
    prices3[idx].innerText = cost + "₽";

    const price1 = cardItems[idx].querySelector(".tea-price1");

    if (price1) {
      if (!basePrices1[idx]) {
        basePrices1[idx] = price1.innerText;
      }
      cost = (parseInt(basePrices1[idx], 10) * item.value) / baseCost;
      price1.innerText = cost + "₽";
    }
  });
});
}

select()