// Max Supply of Evil Tokens
const maxSupply = 6666666666;
let circulatingSupply = 0;

// Function to simulate token usage and fill the blood meter
function drainBlood() {
    if (circulatingSupply < maxSupply) {
        circulatingSupply += Math.floor(Math.random() * 100000000) + 50000000; // Add a random amount
        if (circulatingSupply > maxSupply) circulatingSupply = maxSupply; // Cap at max supply

        let fillPercentage = (circulatingSupply / maxSupply) * 100;

        // Update the blood meter UI
        document.getElementById("bloodFill").style.width = fillPercentage + "%";
        document.getElementById("circulatingSupply").textContent = circulatingSupply.toLocaleString();
    }
}

// Ensure script runs only when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bloodFill").style.width = "0%";
});
