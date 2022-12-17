import React, { useEffect, useState } from 'react';


const formatPrice = ({ amount, currency, quantity }) => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  amount = zeroDecimalCurrency ? amount : amount / 100;
  const total = (quantity * amount).toFixed(2);
  return numberFormat.format(total);
};

const Donate = () => {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    async function fetchConfig() {
      // Fetch config from our backend.
      const {
        unitAmount,
        currency
      } = await fetch('/config')
                  .then(response => response.json());
      setAmount(unitAmount);
      setCurrency(currency);
    }
    fetchConfig();
  }, []);

  return (
    <div className="sr-root">
      <div className="sr-main">
        <section className="donate-container">
          <div>
            <h1>One-Time Donation</h1>
            <h4>Every dollar goes to caring for impossibly cute animals in need!</h4>
            <div className="pasha-image">
              <img
                alt="Cowboy Kermit"
                src={require("../../img/CowboyKermit.jpg")}
                width="140"
                height="160"
              />
            </div>
          </div>
          <form action="/create-checkout-session" method="POST">
            <div className="quantity-setter">
              <button
                className="increment-btn"
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
                type="button"
              >
                -
              </button>
              <input
                type="number"
                id="quantity-input"
                min="1"
                max="10"
                value={quantity}
                name="quantity"
                readOnly
              />
              <button
                className="increment-btn"
                disabled={quantity === 10}
                onClick={() => setQuantity(quantity + 1)}
                type="button"
              >
                +
              </button>
            </div>
            <p className="sr-legal-text">Number of copies (max 10)</p>

            <button role="link" id="submit" type="submit">
              Buy {formatPrice({amount, currency, quantity})}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Donate;

