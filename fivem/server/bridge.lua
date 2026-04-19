local json = json

CreateThread(function()
    while true do
        Wait(Config.TickRate)

        for src, p in pairs(GetAllPlayers()) do
            local payload = {
                player = p.name,
                suspicion = p.suspicion,
                eventRate = p.eventRate,
                money = p.money,
                items = p.items,
                aimScore = GetAimScore(src)
            }

            PerformHttpRequest(Config.API_URL, function() end, "POST",
                json.encode(payload),
                {["Content-Type"] = "application/json"}
            )
        end
    end
end)