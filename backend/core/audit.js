const fs = require("fs");

function logAudit(data) {
    fs.appendFileSync("audit.log", JSON.stringify(data) + "\n");
}

module.exports = { logAudit };