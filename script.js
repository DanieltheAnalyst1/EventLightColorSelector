function suggestColors() {
    const beamColor = document.getElementById('beamColor').value;
    const eventType = document.getElementById('eventType').value;

    // Logic to suggest colors
    let movingHeadColor, keyLightColor, theme;

    // Simple color combinations based on event type
    if (eventType === "concert") {
        movingHeadColor = "#FF4500";  // OrangeRed
        keyLightColor = "#FFD700";    // Gold
        theme = "Energetic and Dynamic";
    } else if (eventType === "corporate") {
        movingHeadColor = "#4682B4";  // SteelBlue
        keyLightColor = "#F0E68C";    // Khaki
        theme = "Sophisticated and Professional";
    } else if (eventType === "wedding") {
        movingHeadColor = "#FFB6C1";  // LightPink
        keyLightColor = "#FFFACD";    // LemonChiffon
        theme = "Romantic and Elegant";
    } else if (eventType === "fashion") {
        movingHeadColor = "#8A2BE2";  // BlueViolet
        keyLightColor = "#FF69B4";    // HotPink
        theme = "Trendy and Modern";
    } else if (eventType === "church") {
        movingHeadColor = "#008000";  // Green
        keyLightColor = "#FFFFFF";    // White
        theme = "Calm and Reverent";
    }

    // Display the color suggestions
    const resultDiv = document.getElementById('colorSuggestion');
    resultDiv.innerHTML = `
        <p><strong>Beam Light Color:</strong> ${beamColor}</p>
        <p><strong>Moving Head Color:</strong> ${movingHeadColor}</p>
        <p><strong>Key Light Color:</strong> ${keyLightColor}</p>
        <p><strong>Suggested Theme:</strong> ${theme}</p>
    `;
}
