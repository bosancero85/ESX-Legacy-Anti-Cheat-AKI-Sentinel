function decide(risk) {
    if (risk > 28) return "ban";
    if (risk > 20) return "kick";
    if (risk > 14) return "flag";
    return "ok";
}

module.exports = { decide };