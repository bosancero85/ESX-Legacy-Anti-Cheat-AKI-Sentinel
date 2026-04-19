local Aim = {}

function InitAim(src)
    Aim[src] = { shots = {} }
end

RegisterNetEvent("aki:shot")
AddEventHandler("aki:shot", function(headshot)
    local src = source

    if not Aim[src] then InitAim(src) end

    table.insert(Aim[src].shots, {
        time = os.clock(),
        head = headshot
    })

    if #Aim[src].shots > 50 then
        table.remove(Aim[src].shots, 1)
    end
end)

function GetAimScore(src)
    local data = Aim[src]
    if not data then return 0 end

    local hs = 0
    for _, s in ipairs(data.shots) do
        if s.head then hs = hs + 1 end
    end

    local rate = (#data.shots > 0) and (hs / #data.shots) or 0
    return rate * 20
end