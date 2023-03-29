const fetchCurrencies = async () => {
    try {
        const response = await fetch(
            "https://api.exchangeratesapi.io/latest?base=PLN"
        );
        const data = await response.json();
        const { USD, EUR, GBP } = data.rates;
        return { USD, EUR, GBP };
    } catch (error) {
        console.log(error);
    }
};

export { fetchCurrencies };
