# 🧠 AKI_Sentinel

AKI_Sentinel is a next-generation anti-cheat system for FiveM (ESX Legacy) that goes beyond traditional rule-based detection.

Instead of relying on static checks, it analyzes player behavior in real time, detects anomalies using machine learning, and classifies suspicious patterns into meaningful categories.

---

## 🚀 Core Features

### 📊 Behavior Analysis
Tracks player activity such as event frequency, money flow, and item usage to detect abnormal patterns.

### 🎯 Aim Pattern Detection
Identifies suspicious aiming behavior like unnatural headshot ratios and reaction times — fully server-side.

### 🧬 Machine Learning Integration
Uses anomaly detection (Isolation Forest) to identify behavior that deviates from normal player patterns.

### 🧠 Cheat-Type Classification
Automatically categorizes suspicious behavior:
- Event Spam
- Money Exploit
- Item Duplication
- Aimbot / Aim Assist

### ⚖️ Risk & Decision Engine
Combines all signals into a dynamic risk score and determines actions:
- OK
- FLAG
- KICK
- BAN

### 🌐 Live Dashboard
Real-time web interface displaying:
- Player risk levels
- Detected cheat types
- System decisions

### 📜 Audit System
Every action is logged and traceable for full transparency and review.

---

## 🛠️ Tech Stack

- Lua (FiveM / ESX)
- Node.js (API + WebSocket)
- Python (Machine Learning)
- HTML/JS Dashboard

---

## 🎯 Philosophy

AKI_Sentinel does not assume players are cheating.

It evaluates behavior and answers one question:

> “Is this statistically normal?”

---

## ⚠️ Notes

- Fully server-side (no invasive client methods)
- Designed to minimize false positives
- Modular and extensible architecture

---

## 📄 License

MIT License

Directory Structure:

''' 
aki_sentinel/
│
├── fivem/
│   ├── fxmanifest.lua
│   ├── config.lua
│   └── server/
│       ├── main.lua
│       ├── aim.lua
│       ├── bridge.lua
│
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── api.js
│   ├── core/
│   │   ├── state.js
│   │   ├── classifier.js
│   │   ├── decision.js
│   │   ├── audit.js
│   │   └── ml.js
│
├── ml/
│   └── ml_engine.py
│
└── dashboard/
    └── index.html
'''

# ####################################
#    
#    START
#    
# ####################################

</> BASH

'''
cd backend
npm install
node server.js
node api.js
'''

</> BASH

'''
cd ml
python ml_engine.py
'''

# ####################################
#    
#    BROWSER
#    
# ####################################

</> BASH

'''
dashboard/index.html
'''

GITHUB TAGS

fivem
esx
fivem-anticheat
gta5
anticheat
lua
nodejs
python
machine-learning
anomaly-detection
websocket
dashboard
realtime
game-security
aimbot-detection
behavior-analysis
cheat-detection
open-source