local Players = {}

local function InitPlayer(src)
    if not Players[src] then
        Players[src] = {
            name = GetPlayerName(src),
            suspicion = 0,
            eventRate = 0,
            money = 0,
            items = 0,
            aimScore = 0
        }
    end
    return Players[src]
end

AddEventHandler("playerConnecting", function()
    InitPlayer(source)
end)

AddEventHandler("playerDropped", function()
    Players[source] = nil
end)

RegisterNetEvent("aki:event")
AddEventHandler("aki:event", function()
    local p = InitPlayer(source)
    p.eventRate = p.eventRate + 1
end)

RegisterNetEvent("aki:money")
AddEventHandler("aki:money", function(amount)
    local p = InitPlayer(source)
    p.money = amount
end)

RegisterNetEvent("aki:item")
AddEventHandler("aki:item", function(amount)
    local p = InitPlayer(source)
    p.items = amount
end)

function GetAllPlayers()
    return Players
end