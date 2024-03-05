const tickerText = document.getElementById("ticker-text");
const tickerValue = document.getElementById("ticker-value");
const tickerSymbol = document.getElementById("ticker-symbol");
const gaugeNeedle = document.getElementById("gauge-needle");

// Simulated data array (replace with your actual data source)
const data = [
    { symbol: "AAPL", value: "STRONG BUY" },
    { symbol: "TSLA", value: "HOLD" },
    { symbol: "AMZN", value: "SELL" }
];

let currentDataIndex = 0;

function updateTicker() {
    const currentData = data[currentDataIndex];
    tickerText.textContent = `Technical Analysis for ${currentData.symbol}`;
    tickerValue.textContent = currentData.value;

    // Update gauge based on value
    gaugeNeedle.classList.remove("buy", "sell");
    if (currentData.value === "STRONG BUY") {
        gaugeNeedle.classList.add("buy");
    } else if (currentData.value === "SELL") {
        gaugeNeedle.classList.add("sell");
    }

    currentDataIndex = (currentDataIndex + 1) % data.length; // Loop through data array
}

setInterval(updateTicker, 3000); // Update ticker every 3 seconds

updateTicker(); // Initial update
