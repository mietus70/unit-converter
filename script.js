const meterToFeet = 3.28084;

function convertAll() {
  convertMeterToFeet();
  convertLitersToGallons();
  convertKilogramsToPounds();
}

function convertMeterToFeet() {
  const meter = document.getElementById("input-value").value;
  const feet = meter * meterToFeet;
  document.getElementById("meter-feet-result").textContent =
    feet.toFixed(2) + " feet";
}

function convertLitersToGallons() {
  const liters = document.getElementById("input-value").value;
  const gallons = liters * 0.264172;
  document.getElementById("liters-gallons-result").textContent =
    gallons.toFixed(2) + " gallons";
}

function convertKilogramsToPounds() {
  const kilograms = document.getElementById("input-value").value;
  const pounds = kilograms * 2.20462;
  document.getElementById("kilograms-pounds-result").textContent =
    pounds.toFixed(2) + " pounds";
}
