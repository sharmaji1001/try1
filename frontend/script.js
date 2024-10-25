const currencySelect = document.getElementById('currency');
const currencyRates = document.getElementById('currency-rates');
const orderStatus = document.getElementById('order-status');

async function fetchCurrencies() {
  const res = await fetch('http://localhost:5000/api/currencies');
  const data = await res.json();
  data.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency.name;
    option.textContent = `${currency.name} - Rate: ${currency.rate}`;
    currencySelect.appendChild(option);
    const rateDiv = document.createElement('div');
    rateDiv.textContent = `${currency.name}: ${currency.rate}`;
    currencyRates.appendChild(rateDiv);
  });
}

document.getElementById('exchange-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const currency = currencySelect.value;
  const amount = document.getElementById('amount').value;
  const delivery = document.getElementById('delivery').checked;

  const res = await fetch('http://localhost:5000/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ currency, amount, delivery })
  });
  const data = await res.json();
  orderStatus.textContent = data.message || "Order creation failed";
});

fetchCurrencies();
