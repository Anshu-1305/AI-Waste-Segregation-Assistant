function getResponse() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let reply = "";

  // Hazardous waste
  if (input.includes("battery") || input.includes("batteries") || input.includes("electronic") || input.includes("e-waste") || input.includes("chemical") || input.includes("paint") || input.includes("oil") || input.includes("medicine") || input.includes("medicine") || input.includes("pesticide")) {
    reply = "This is HAZARDOUS WASTE. Dispose it at authorized e-waste collection centers, hazardous waste facilities, or take-back programs. Never throw hazardous items in regular waste bins.";
  }
  // Wet waste (organic)
  else if (input.includes("banana") || input.includes("food") || input.includes("vegetable") || input.includes("fruit") || input.includes("peels") || input.includes("leaves") || input.includes("grass") || input.includes("organic") || input.includes("compost")) {
    reply = "This is WET WASTE (Organic). Dispose it in the compost bin or designated wet waste bin. It can be composted at home or sent to composting facilities.";
  }
  // Dry waste (paper, cardboard, cloth)
  else if (input.includes("paper") || input.includes("cardboard") || input.includes("cloth") || input.includes("fabric") || input.includes("newspaper") || input.includes("magazine") || input.includes("wood") || input.includes("dry waste")) {
    reply = "This is DRY WASTE. Segregate it and place in the dry waste bin. It can be recycled or sent to waste management facilities.";
  }
  // Recyclable waste (plastic, metal, glass)
  else if (input.includes("plastic") || input.includes("bottle") || input.includes("glass") || input.includes("metal") || input.includes("aluminum") || input.includes("tin") || input.includes("can") || input.includes("recyclable")) {
    reply = "This is RECYCLABLE WASTE. Rinse it if needed, segregate by material type (plastic, glass, metal), and place in the recyclable waste bin for collection.";
  }
  // General waste segregation guidance
  else if (input.includes("how") || input.includes("dispose") || input.includes("throw") || input.includes("waste") || input.includes("segregate") || input.includes("category")) {
    reply = "Waste is typically categorized into four types:\n\n1. WET WASTE: Food scraps, organic matter → Compost or wet waste bin\n2. DRY WASTE: Paper, cardboard, cloth → Dry waste bin\n3. RECYCLABLE: Plastic, glass, metal → Recyclable bin\n4. HAZARDOUS: Electronics, chemicals, batteries → Special collection centers\n\nPlease specify the item you want to dispose of for detailed guidance.";
  }
  else if (input.trim() === "") {
    reply = "Please ask a question about waste disposal. For example: 'Where should I throw batteries?' or 'How do I dispose of plastic bottles?'";
  }
  else {
    reply = "Thank you for your question! Based on what you've asked, I recommend checking with your local waste management guidelines or municipality for the most accurate disposal method in your area. If you can describe the waste item more specifically (e.g., plastic, food, paper, electronic), I can provide better guidance.";
  }

  document.getElementById("response").innerText = reply;
}
