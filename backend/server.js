const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 });

let clients = [];

wss.on("connection", ws => {
    clients.push(ws);
    ws.on("close", () => clients = clients.filter(c => c !== ws));
});

function broadcast(data) {
    const msg = JSON.stringify(data);
    clients.forEach(c => c.send(msg));
}

module.exports = { broadcast };