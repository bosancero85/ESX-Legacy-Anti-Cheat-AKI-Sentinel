const express = require("express");
const { broadcast } = require("./server");
const { updatePlayer } = require("./core/state");
const { classify } = require("./core/classifier");
const { decide } = require("./core/decision");
const { logAudit } = require("./core/audit");
const { predict } = require("./core/ml");

const app = express();
app.use(express.json());

app.post("/update", async (req, res) => {
    const p = updatePlayer(req.body);

    const cls = classify(p.current);
    const ml = await predict(p.current);

    let finalRisk = p.current.risk;
    if (ml.anomaly) finalRisk += 10;
    finalRisk += cls.confidence;

    const action = decide(finalRisk);

    const result = {
        player: req.body.player,
        risk: finalRisk,
        type: cls.type,
        action
    };

    logAudit(result);

    broadcast({ type: "update", data: result });

    res.sendStatus(200);
});

app.listen(3001, () => console.log("API running"));