// Frontend/src/app.js

class SolumaRuntimeEngine {
    constructor() {
        this.globalState = {
            userXP: 1200,
            integrityScore: 100,
            assignedInstructorToken: false
        };
    }

    async bootstrapApplication() {
        try {
            // Load component into layout frame view
            const response = await fetch('components/navbar.html');
            if (!response.ok) throw new Error("Navbar payload component unresolved.");
            const content = await response.text();
            document.getElementById('navbar-container').innerHTML = content;
            
            this.bindCoreNavbarInteractions();
            this.syncStateDisplays();
        } catch (error) {
            console.error("Layout engine instantiation crash sequence:", error);
        }
    }

    bindCoreNavbarInteractions() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const destination = link.getAttribute('href');
                if (destination.startsWith('#')) {
                    e.preventDefault();
                    window.location.hash = destination;
                }
            });
        });
    }

    syncStateDisplays() {
        const xpElement = document.getElementById('user-xp');
        if(xpElement) xpElement.textContent = this.globalState.userXP;
    }

    // Backend connecting update
    async handleAiInference() {
        const queryBox = document.getElementById('ai-prompt-input');
        const displayLogs = document.getElementById('chat-logs');
        if(!queryBox || !queryBox.value.trim()) return;

        // User Statement Insertion
        const userPromptBubble = document.createElement('div');
        userPromptBubble.className = 'user-bubble';
        userPromptBubble.textContent = queryBox.value;
        displayLogs.appendChild(userPromptBubble);

        // AI Agent Evaluation Response Block (Loading status)txt change
        const aiProcessingBubble = document.createElement('div');
        aiProcessingBubble.className = 'ai-bubble';
        aiProcessingBubble.textContent = "SOLUMA Core Intelligence connecting to backend...";
        displayLogs.appendChild(aiProcessingBubble);

        queryBox.value = '';
        displayLogs.scrollTop = displayLogs.scrollHeight;

        try {
            // 🔄 Real Backend API Call (Updated)
            const response = await fetch('https://soluma-backend-project.onrender.com/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: userPromptBubble.textContent })
            });
            const data = await response.json();
            
            // 💬 Server ka message screen par set karna
            aiProcessingBubble.textContent = data.response;

            
            
            // XP Status Update
            this.globalState.userXP += 10;
            this.syncStateDisplays();
            
        } catch (error) {
            console.error("Backend connection error:", error);
            aiProcessingBubble.textContent = "Error: Backend server se connect nahi ho paya.";
        }

        displayLogs.scrollTop = displayLogs.scrollHeight;
    }

    simulateProctorTrigger() {
        alert("SOLUMA Security Alert: Tab switch/Unauthorized peripheral input match discovered! Initializing live integrity reduction rule logs.");
        this.globalState.integrityScore = Math.max(0, this.globalState.integrityScore - 15);
        const integrityTracker = document.getElementById('passport-integrity');
        if (integrityTracker) {
            integrityTracker.textContent = `${this.globalState.integrityScore}%`;
        }
        alert(`Integrity state updated in Skill Passport Database: ${this.globalState.integrityScore}%`);
    }
}

// Bind payload access globally to framework container rulesets
window.appEngine = new SolumaRuntimeEngine();
document.addEventListener("DOMContentLoaded", () => window.appEngine.bootstrapApplication());
