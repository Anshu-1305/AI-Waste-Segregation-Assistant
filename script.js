function getResponse() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let reply = "";

  if (input.includes("battery")) {
    reply = "Batteries are hazardous waste. Dispose them at an e-waste collection center.";
  } else if (input.includes("banana") || input.includes("food")) {
    reply = "This is wet waste. Dispose it in the compost or wet waste bin.";
  } else if (input.includes("plastic")) {
    reply = "Plastic is dry recyclable waste. Rinse and place it in the dry waste bin.";
  } else {
    reply = "Please consult local waste management guidelines.";
  }

  document.getElementById("response").innerText = reply;
}
