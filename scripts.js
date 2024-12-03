const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const inputCurrency = document.querySelector(".input-currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");
const currencyName = document.getElementById("currency-name");
const currencyImage = document.querySelector(".currency-img");

const taxas = {
  dolar: 5.2,
  euro: 6.2,
  libra: 7.71
};

function convertValues() {
  const inputCurrencyValue = inputCurrency.value.replace(',', '.');
  const numericValue = parseFloat(inputCurrencyValue);
  const selectedCurrency = currencySelect.value;

  if (!numericValue) return;

  const convertedValue = numericValue / taxas[selectedCurrency];

  currencyValueConverted.innerHTML = new Intl.NumberFormat(getLocale(selectedCurrency), {
    style: "currency",
    currency: getCurrencyCode(selectedCurrency)
  }).format(convertedValue);

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(numericValue);
}

function changeCurrency() {
  const selectedCurrency = currencySelect.value;

  currencyName.innerHTML = getCurrencyName(selectedCurrency);
  currencyImage.src = `assets/${selectedCurrency}.png`;

  convertValues();
}

function getLocale(currency) {
  switch (currency) {
    case "dolar":
      return "en-US";
    case "euro":
      return "de-DE";
    case "libra":
      return "en-GB";
  }
}

function getCurrencyCode(currency) {
  switch (currency) {
    case "dolar":
      return "USD";
    case "euro":
      return "EUR";
    case "libra":
      return "GBP";
  }
}

function getCurrencyName(currency) {
  switch (currency) {
    case "dolar":
      return "Dolar Americano";
    case "euro":
      return "Euro";
    case "libra":
      return "Libra";
  }
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
