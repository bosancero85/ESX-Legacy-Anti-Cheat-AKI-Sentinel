const players = {};

function updatePlayer(data) {
    if (!players[data.player]) {
        players[data.player] = { history: [] };
    }

    const p = players[data.player];

    const risk =
        data.suspicion * 2 +
        data.eventRate * 0.5 +
        data.money * 0.001 +
        data.items * 0.2 +
        data.aimScore * 0.5;

    const entry = { ...data, risk, time: Date.now() };

    p.history.push(entry);
    if (p.history.length > 50) p.history.shift();

    p.current = entry;
    return p;
}

module.exports = { updatePlayer };