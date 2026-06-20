document.addEventListener("DOMContentLoaded", () => {
    console.log("Global System Engine Thread: Active.");

    // 🤖 AI Intelligence Core Logic
    const userInput = document.querySelector('.input-row input');
    const executeBtn = document.querySelector('.input-row button');

    if (executeBtn && userInput) {
        executeBtn.addEventListener('click', async () => {
            const messageText = userInput.value; 
            if (messageText.trim() === "") return;

            console.log("User prompt:", messageText);
            
            // User ko feedback dena
            alert("AI process kar raha hai, kripya pratiksha karein...");

            try {
                // Backend ko request bhej rahe hain
                const response = await fetch('https://soluma-backend.onrender.com/api/ask', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question: messageText })
                });

                const data = await response.json();
                
                // AI ka jawab screen par dikhayein
                if (data.answer) {
                    alert("AI Jawab: " + data.answer);
                } else {
                    alert("Error: AI ne koi jawab nahi diya.");
                }
            } catch (error) {
                console.error("Connection Error:", error);
                alert("Error: Backend se connect nahi ho pa raha. Check karein ki Render live hai ya nahi.");
            }

            userInput.value = ""; // Input box khali karein
        });                                                                                                                                                                                                                           
    }                                                                                                                                                                                                                                                                                                                                    

    // Event Delegation (Login button)
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-login")) {
            console.log("Login clicked");
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