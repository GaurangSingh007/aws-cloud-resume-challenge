const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://7w4eiuijxa5cec4yvg7wfhn45e0qczpn.lambda-url.ap-south-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error("Visitor counter fetch failed:", error);
        counter.innerHTML = "Views: N/A";
    }
}

updateCounter();