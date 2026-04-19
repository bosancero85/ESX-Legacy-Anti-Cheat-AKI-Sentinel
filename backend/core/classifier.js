function classify(p) {
    if (p.aimScore > 15) return { type: "aimbot", confidence: 8 };
    if (p.money > 50000) return { type: "money_exploit", confidence: 7 };
    if (p.items > 20) return { type: "item_dupe", confidence: 6 };
    if (p.eventRate > 15) return { type: "event_spam", confidence: 5 };

    return { type: "legit", confidence: 0 };
}

module.exports = { classify };