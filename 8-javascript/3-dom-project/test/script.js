const BUTTONS = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];
const STORAGE_KEY = 'rageClickData';

let rageData = {
    totalClicks: 0,
    clicks: {},
    history: [],
    lastResetDate: new Date().toDateString()
};

const elements = {
    totalClicks: document.getElementById('totalClicks'),
    rageLevel: document.getElementById('rageLevel'),
    mostClicked: document.getElementById('mostClicked'),
    rageMessage: document.getElementById('rageMessage'),
    buttonGrid: document.getElementById('buttonGrid'),
    historyContainer: document.getElementById('historyContainer'),
    resetBtn: document.getElementById('resetBtn')
};

const RAGE_MESSAGES = {
    0: "Click the buttons above to test your patience...",
    1: "One click? That's nothing 😌",
    5: "Warming up! 🙂",
    10: "Getting there... 😐",
    20: "Feeling the heat? 🤔",
    50: "Now we're talking! 😤",
    100: "You clicked this 94 times. Calm down bro. 😠",
    200: "This is getting serious! 😡",
    500: "You might want to take a break... 🔥",
    1000: "OKAY, YOU'RE DEFINITELY ANGRY NOW!!! 🤬"
};

function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.lastResetDate === new Date().toDateString()) {
            rageData = parsed;
        } else {
            resetData();
        }
    }
    initializeClickCounts();
}

function initializeClickCounts() {
    BUTTONS.forEach(btn => {
        if (!rageData.clicks[btn]) {
            rageData.clicks[btn] = 0;
        }
    });
}

function saveData() {
    rageData.lastResetDate = new Date().toDateString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rageData));
}

function getHeatIndicator(totalClicks) {
    if (totalClicks === 0) return '😐';
    if (totalClicks < 5) return '😌';
    if (totalClicks < 10) return '🙂';
    if (totalClicks < 20) return '😐';
    if (totalClicks < 50) return '🤔';
    if (totalClicks < 100) return '😤';
    if (totalClicks < 200) return '😠';
    if (totalClicks < 500) return '😡';
    return '🤬';
}

function getRageMessage(totalClicks) {
    for (let [threshold, message] of Object.entries(RAGE_MESSAGES).sort((a, b) => b[0] - a[0])) {
        if (totalClicks >= parseInt(threshold)) {
            return message;
        }
    }
    return RAGE_MESSAGES[0];
}

function getMostClickedButton() {
    let maxClicks = 0;
    let mostClicked = 'None';
    for (let [btn, count] of Object.entries(rageData.clicks)) {
        if (count > maxClicks) {
            maxClicks = count;
            mostClicked = btn;
        }
    }
    return mostClicked;
}

function addToHistory(buttonName) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const entry = {
        button: buttonName,
        time: time,
        timestamp: now.getTime()
    };
    rageData.history.unshift(entry);
    if (rageData.history.length > 50) {
        rageData.history.pop();
    }
}

function renderHistory() {
    const container = elements.historyContainer;
    if (rageData.history.length === 0) {
        container.innerHTML = '<p class="empty-history">No clicks yet. Stay calm! 🙏</p>';
        return;
    }

    container.innerHTML = rageData.history.map((entry, index) => `
        <div class="history-item">
            <span class="history-button">${entry.button}</span>
            <span class="history-time">${entry.time}</span>
        </div>
    `).join('');
}

function updateUI() {
    elements.totalClicks.textContent = rageData.totalClicks;
    elements.rageLevel.textContent = getHeatIndicator(rageData.totalClicks);
    elements.mostClicked.textContent = getMostClickedButton();
    elements.rageMessage.textContent = getRageMessage(rageData.totalClicks);
    
    updateButtonCounts();
    renderHistory();
}

function updateButtonCounts() {
    BUTTONS.forEach(btn => {
        const btnEl = document.getElementById(`btn-${btn}`);
        if (btnEl) {
            const count = rageData.clicks[btn];
            btnEl.innerHTML = `<span>${btn}</span><small>${count}</small>`;
        }
    });
}

function handleButtonClick(buttonName) {
    rageData.totalClicks++;
    rageData.clicks[buttonName]++;
    addToHistory(buttonName);
    saveData();
    updateUI();
    
    const btnEl = document.getElementById(`btn-${buttonName}`);
    btnEl.classList.add('clicked');
    setTimeout(() => btnEl.classList.remove('clicked'), 200);
}

function createButtons() {
    const grid = elements.buttonGrid;
    grid.innerHTML = '';
    BUTTONS.forEach(btn => {
        const button = document.createElement('button');
        button.id = `btn-${btn}`;
        button.className = 'rage-button';
        button.innerHTML = `<span>${btn}</span><small>0</small>`;
        button.addEventListener('click', () => handleButtonClick(btn));
        grid.appendChild(button);
    });
}

function resetData() {
    rageData = {
        totalClicks: 0,
        clicks: {},
        history: [],
        lastResetDate: new Date().toDateString()
    };
    BUTTONS.forEach(btn => {
        rageData.clicks[btn] = 0;
    });
    saveData();
    updateUI();
}

function init() {
    loadData();
    createButtons();
    updateUI();
    
    elements.resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure? This will clear all stats.')) {
            resetData();
        }
    });
}

init();
