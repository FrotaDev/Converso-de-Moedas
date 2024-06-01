
const convertButton = document.querySelector(".convert-button")
const currencytSelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueToConverted = document.querySelector(".currency-value")
    


    const dolarToday = 5.2
    const euroToday = 5.7
    const libraToday = 6.7
    const bitcoinToday = 62.3740
    const realToday = 5.7


    if (currencytSelect.value == "dolar") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (currencytSelect.value == "euro") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencytSelect.value == "libra") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencytSelect.value == "bitcoin") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday )
    }

    if (currencytSelect.value == "real") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue /realToday )
    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

if (currencytSelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/estados-unidos.png"
}


if (currencytSelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/Euro.png"
}

if (currencytSelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
}

if (currencytSelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
}

if (currencytSelect.value == "real") {
    currencyName.innerHTML = "Real"
    currencyImage.src = "./assets/brasil 2.png"
}
convertValues()
}


currencytSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
