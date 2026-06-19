// Frontend/src/router.js

export const routes = {
    'home': {
        title: 'SOLUMA | Illuminate Potential',
        render: () => `
            <section class="hero-section">
                <div class="hero-content">
                    <h1>Welcome to SOLUMA</h1>
                    <p>Illuminate Potential. Inspire Lifelong Learning.</p>
                    <button class="btn-start" onclick="window.location.hash = '#learning-layer'">Start Learning</button>
                </div>
            </section>
        `
    },
    'learning-layer': {
        title: 'SOLUMA | Layer 1: Core Learning Matrix',
        render: () => `
            <div class="container-fluid">
                <div class="section-header">
                    <h2>📚 1. FULL LMS & PROFESSIONAL LEARNING LAYER</h2>
                    <p>Self-paced tracks, real-time broadcasts, and automated runtime pipelines.</p>
                </div>
                <div class="course-grid">
                    <div class="course-card">
                        <span class="badge live">🔴 LIVE CLASS ENGINE</span>
                        <h3>Advanced Neural Network Optimization</h3>
                        <p>Real-time stream workspace with integrated instant AI doubt matching, live notes generation, and automated face-tracking attendance metrics.</p>
                        <button class="btn-action" style="background: #e67e22; color: white;" onclick="window.location.hash = '#live-classroom'">Launch Live Broadcast</button>
                    </div>
                    <div class="course-card">
                        <span class="badge self-paced">🎬 RECORDED RECON ENGINE</span>
                        <h3>Full-Stack Software Architecture Specialization</h3>
                        <p>Coursera-level structured learning paths with timestamped AI chapters, structured modules, and interactive assignment workflows.</p>
                        <button class="btn-action" onclick="alert('Loading AI Summaries & Practice Flashcard sets...')">Access On-Demand Directory</button>
                    </div>
                </div>
            </div>
        `
    },
    'live-classroom': {
        title: 'SOLUMA | Live Interactive Studio',
        render: () => `
            <div class="container-fluid" style="max-width: 1400px; padding: 1.5rem;">
                <div class="section-header" style="margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <span class="badge live" style="margin-bottom: 5px;">🔴 LIVE BROADCAST NODE #402</span>
                        <h2>Advanced Neural Network Optimization — Studio Workspace</h2>
                    </div>
                    <button class="btn-login" style="border-color: #ef4444; color: #ef4444;" onclick="window.location.hash='#learning-layer'">❌ Exit Studio</button>
                </div>

                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; min-height: 70vh;">
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="background: #0f172a; border-radius: 12px; height: 420px; position: relative; display: flex; justify-content: center; align-items: center; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
                            <div style="text-align: center; color: #94a3b8;">
                                <div style="font-size: 3rem; margin-bottom: 10px;">👨‍🏫</div>
                                <h3 style="color: white; margin-bottom: 5px;">Prof. Rohan Sharma (AI Research Lead)</h3>
                                <p style="font-size: 0.9rem;">Screen Mirroring + WebRTC Multi-stream Active</p>
                            </div>
                            <div style="position: absolute; top: 15px; left: 15px; background: rgba(0,0,0,0.6); padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; color: #34d399; font-weight: 700; border: 1px solid #059669;">
                                👁️ AI Face-Tracking Attendance: ACTIVE
                            </div>
                            <div style="position: absolute; bottom: 15px; right: 15px; background: rgba(230, 126, 34, 0.9); padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; color: white; font-weight: 600;">
                                👥 142 Students Connected
                            </div>
                        </div>

                        <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem;">
                            <h4 style="margin-bottom: 10px;">📝 Live AI Automated Notes Compiler</h4>
                            <p style="font-size: 0.9rem; color: #475569; line-height: 1.6; background: #f8fafc; padding: 12px; border-radius: 6px; border-left: 3px solid #e67e22;">
                                <strong>[Minute 14:22] Current Concept:</strong> Backpropagation uses the chain rule to compute gradients of the loss function with respect to weights.
                            </p>
                        </div>
                    </div>

                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; height: 575px;">
                        <div style="background: #f8fafc; padding: 1rem; border-bottom: 1px solid #e2e8f0;">
                            <h4>🤖 SOLUMA Instant Doubt Ally</h4>
                            <p style="font-size: 0.75rem; color: #64748b;">Submit questions to instantly query the lecture transcript knowledge graph.</p>
                        </div>
                        <div id="classroom-chat-logs" style="flex: 1; padding: 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 0.8rem; background: #fafafa;">
                            <div style="background: white; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px; font-size: 0.85rem;">
                                <span style="font-weight: 700; color: #475569;">Rahul K.:</span> What is the learning rate alpha used for here?
                            </div>
                        </div>
                        <div style="display: flex; padding: 0.8rem; border-top: 1px solid #e2e8f0; gap: 8px; background: white;">
                            <input type="text" id="classroom-doubt-input" placeholder="Type a dynamic doubt..." style="flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.85rem; outline: none;">
                            <button class="btn-signup" style="padding: 8px 14px; font-size: 0.85rem;" onclick="window.executeClassroomDoubtInference()">Ask Ally</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'intelligence-layer': {
        title: 'SOLUMA | Layer 2: Core Intelligence Ecosystem',
        render: () => `
            <div class="container-fluid max-w-4xl">
                <div class="section-header">
                    <h2>🤖 2. SOLUMA ORIGINAL AI INTELLIGENCE CORE</h2>
                    <p>Multimodal companion for code review, resume analytics, and skill gap mapping.</p>
                </div>
                <div class="ai-workspace">
                    <div class="chat-window" id="chat-logs">
                        <div class="ai-bubble">Hello Shreya Kumari. SOLUMA Foundation Knowledge Graphs are mounted. Ask me to generate mock interviews, analyze skill gaps, or draft course models dynamically.</div>
                    </div>
                    <div class="input-row">
                        <input type="text" id="ai-prompt-input" placeholder="Ask AI Tutor to compile notes...">
                        <button class="btn-signup" onclick="window.appEngine.handleAiInference()">Execute Prompt</button>
                    </div>
                </div>
            </div>
        `
    },
    'verification-layer': {
        title: 'SOLUMA | Layer 3: Trust & Verification Core',
        render: () => `
            <div class="container-fluid max-w-4xl">
                <div class="section-header">
                    <h2>🔐 3. TRUST, INTEGRITY & EXAMINATION ENGINE</h2>
                    <p>University-grade proctored exam blocks with AI active vision matching rulesets.</p>
                </div>
                <div class="proctor-panel">
                    <div class="proctor-alert-box">
                        <h3>Grand Assessment Week Operational Controller</h3>
                        <p>Status: Monitoring Security Framework Listeners.</p>
                    </div>
                    <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
                        <button class="btn-signup" style="background:#ef4444;" onclick="window.appEngine.simulateProctorTrigger()">Test Camera & Browser Lock Listener</button>
                    </div>
                </div>
            </div>
        `
    },
    'career-layer': {
        title: 'SOLUMA | Layer 4: Global Skill Passport Matrix',
        render: () => `
            <div class="container-fluid" style="max-width: 1000px;">
                <div class="section-header">
                    <h2>📜 4. GLOBAL SKILL PASSPORT & CAREER SYSTEM</h2>
                    <p>Decentralized verified digital identity mapping competencies directly to global recruiters.</p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 2rem;">
                    <!-- Professional Digital Passport Card -->
                    <div class="passport-frame" style="height: fit-content;">
                        <div class="passport-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1.5rem;">
                            <div>
                                <h2 style="font-size:1.8rem; color: #fff; margin-bottom: 4px;">Shreya Kumari</h2>
                                <span class="passport-subtitle" style="font-size: 0.9rem; color: #f5b041;">Founder & CEO, SOLUMA</span>
                                <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 6px;">📍 Mumbai, MH, India | Institution Track Vector: DY Patil</p>
                            </div>
                            <div class="xp-pill" style="height: fit-content; background: #e67e22;">LEVEL 5 EXEC</div>
                        </div>

                        <div class="metric-row" style="margin-top: 1.5rem;">
                            <div class="metric-box">
                                <span class="label">AI Integrity Index</span>
                                <span class="value text-emerald" id="passport-integrity">100%</span>
                            </div>
                            <div class="metric-box">
                                <span class="label">AI Readiness Rating</span>
                                <span class="value text-gold">96.4%</span>
                            </div>
                        </div>

                        <div class="skills-list" style="margin-top: 1.5rem;">
                            <h4>Verified Competency Ledger Keys</h4>
                            <div class="skill-tag-item">
                                <span>Autonomous Multi-Agent Architecture</span>
                                <div class="progress-bar"><div class="progress" style="width: 98%"></div></div>
                            </div>
                            <div class="skill-tag-item">
                                <span>Vanilla SPA Runtime Engineering</span>
                                <div class="progress-bar"><div class="progress" style="width: 92%"></div></div>
                            </div>
                        </div>
                    </div>

                    <!-- Career Alignment & Recruiter Connect Module -->
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="background: white; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 12px;">
                            <h4 style="margin-bottom: 10px; color: #0f172a;">💼 Recruiter Matching Pipeline</h4>
                            <div style="background: #f1f5f9; padding: 10px; border-radius: 6px; margin-bottom: 10px; font-size: 0.85rem;">
                                <strong>Global Job Visibility status:</strong> <span style="color: #10b981; font-weight:700;">ACTIVE (Open to Offers)</span>
                            </div>
                            <p style="font-size: 0.85rem; color: #475569; line-height: 1.5;">Your Skill Passport is securely exposed to 14 verified Enterprise Enterprise clouds including tech consortium hubs.</p>
                            <button class="btn-action" style="width: 100%; margin-top: 15px; background: #0f172a; color: white;" onclick="alert('Compiling instant verified resume link utilizing zero-knowledge proofs...')">Export Smart AI Resume</button>
                        </div>

                        <div style="background: white; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 12px;">
                            <h4 style="margin-bottom: 8px; color: #0f172a;">🎯 Real-Time Skill Gap Analytics</h4>
                            <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 12px;">SOLUMA AI cross-matched your code commits with active Silicon Valley tracks.</p>
                            <span style="font-size: 0.75rem; font-weight: 700; color: #ea580c; background: #fff7ed; padding: 4px 8px; border-radius: 4px;">Recommendation: Complete Layer 5 Monetization API Suite to lock a 100% Match.</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'creator-layer': {
        title: 'SOLUMA | Layer 5: Monetization & Creator Portal',
        render: () => `
            <div class="container-fluid">
                <div class="section-header">
                    <h2>🚀 5. TEACHER CREATOR & MARKETPLACE SUITE</h2>
                    <p>Onboard professional instructors, distribute course assets, and review tokenized wallet splits.</p>
                </div>

                <!-- Upper Section: Instructor Lifecycle Onboarding Track -->
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem; margin-bottom: 2rem;">
                    <h3 style="font-size: 1.2rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px;">📋 Automated Instructor Screening Pipeline</h3>
                    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; text-align: center; position: relative; margin-bottom: 1.5rem;">
                        <div style="background: #ef4444; color: white; padding: 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">1. Instructor Signup</div>
                        <div style="background: #f5b041; color: #1e293b; padding: 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">2. Demo Submission</div>
                        <div style="background: #e2e8f0; color: #64748b; padding: 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">3. AI Screening</div>
                        <div style="background: #e2e8f0; color: #64748b; padding: 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">4. Admin Verification</div>
                        <div style="background: #e2e8f0; color: #64748b; padding: 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">5. Active Token</div>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button class="btn-signup" style="background: #e67e22;" onclick="alert('Launching Webcam sandbox node for demo content compilation...')">Start Demo Application</button>
                        <button class="btn-login" onclick="alert('Accessing system admin dashboard parameters...')">Admin Control Override</button>
                    </div>
                </div>

                <!-- Lower Grid: P2P Asset Marketplace & Revenue Splits -->
                <div class="course-grid">
                    <div class="course-card">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <h3>📚 P2P Peer Asset Marketplace</h3>
                            <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; font-weight: 700; padding: 2px 6px; border-radius:4px;">LIVE</span>
                        </div>
                        <p>Instructors and peers can list system templates, source libraries, design blueprints, and digital text assets directly to target groups.</p>
                        <div style="border-top:1px solid #f1f5f9; padding-top: 10px; font-size: 0.85rem; color: #475569;">
                            🛒 Active Listings: <strong>412 Assets</strong> | Gross Volume: <strong>4.2 ETH Equivalent</strong>
                        </div>
                        <button class="btn-action" style="background:#0f172a; color:white;">Enter Asset Exchange Marketplace</button>
                    </div>

                    <div class="course-card">
                        <h3>🪙 Smart Split-Wallet Architecture</h3>
                        <p>Automated payment gateway splits instantly executing distribution ledger instructions between campus accounts, mentors, and system operational stacks.</p>
                        <div style="background: #f8fafc; padding: 12px; border-radius: 6px; font-size: 0.85rem;">
                            💰 <strong>Your Operational Wallet:</strong> <span style="color:#16a34a; font-weight:700;">$2,450.00 USD</span> <br>
                            🔒 Escrow Hold: $410.00 (Verification Pending)
                        </div>
                        <button class="btn-action" onclick="alert('Opening secure strip gateway settlement configurations...')">Configure Wallet Rules</button>
                    </div>
                </div>
            </div>
        `
    }
};

class Router {
    constructor() {
        window.addEventListener('hashchange', () => this.executeRouteUpdate());
        window.addEventListener('load', () => this.executeRouteUpdate());
        this.initClassroomGlobalHandlers();
    }

    executeRouteUpdate() {
        const hash = window.location.hash.replace('#', '') || 'home';
        const route = routes[hash] || routes['home'];
        
        document.title = route.title;
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = route.render();
            this.syncActiveNavigationState(hash);
        }
    }

    syncActiveNavigationState(hash) {
        document.querySelectorAll('.nav-link').forEach(link => {
            if(link.getAttribute('href') === `#${hash}` || (hash === 'home' && link.getAttribute('href') === '#')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    initClassroomGlobalHandlers() {
        window.executeClassroomDoubtInference = () => {
            const txtBox = document.getElementById('classroom-doubt-input');
            const chatLogs = document.getElementById('classroom-chat-logs');
            if(!txtBox || !txtBox.value.trim()) return;

            const logEntry = document.createElement('div');
            logEntry.style.cssText = "background: white; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px; font-size: 0.85rem;";
            logEntry.innerHTML = `<span style="font-weight: 700; color: #475569;">You:</span> ${txtBox.value}`;
            chatLogs.appendChild(logEntry);
            
            const questionText = txtBox.value;
            txtBox.value = '';
            chatLogs.scrollTop = chatLogs.scrollHeight;

            const aiEntry = document.createElement('div');
            aiEntry.style.cssText = "background: #fff7ed; border: 1px solid #ffedd5; padding: 10px; border-radius: 8px; font-size: 0.85rem; border-left: 3px solid #ea580c; margin-top: 5px;";
            
            setTimeout(() => {
                aiEntry.innerHTML = `<span style="font-weight: 700; color: #ea580c;">⚡ SOLUMA AI Ally:</span> I verified your doubt "${questionText}". The instructor's latest slide aligns with this. Key metadata successfully recorded to your Skill Passport.`;
                chatLogs.appendChild(aiEntry);
                chatLogs.scrollTop = chatLogs.scrollHeight;
            }, 1000);
        };
    }
}

new Router();