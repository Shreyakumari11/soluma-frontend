// Frontend/script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Global System Engine Thread: Active.");
    // 🤖 AI Intelligence Core Logic
    const userInput = document.querySelector('.input-row input');
    const executeBtn = document.querySelector('.input-row button');

    if (executeBtn && userInput) {
        executeBtn.addEventListener('click', () => {
            const messageText = userInput.value; 
            if (messageText.trim() !== "") {
                console.log("User prompt:", messageText);
                alert("Prompt executed: " + messageText); // Yeh check karne ke liye ki kaam kar raha hai
                userInput.value = ""; // Input box ko khali karne ke liye
            }
        });
    }

    // Event Delegation for dynamically appended buttons across asynchronous nodes
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-login")) {
            alert("SOLUMA Dynamic Identity Framework is active. Database access endpoint connection loading...");
        }
    });

    // Real-time window scrolling aesthetic mutation listener
    window.addEventListener("scroll", () => {
        const headerContainer = document.querySelector(".navbar");
        if (headerContainer) {
            if (window.scrollY > 15) {
                headerContainer.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
                headerContainer.style.background = "#ffffff";
            } else {
                headerContainer.style.boxShadow = "0 2px 10px rgba(0,0,0,0.03)";
            }
            headerContainer.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
        }
    });
});