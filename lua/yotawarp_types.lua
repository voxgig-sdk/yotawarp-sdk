-- Typed models for the Yotawarp SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Generate
---@field config string
---@field metadata table
---@field success boolean
---@field vpnKey? string

---@class GenerateLoadMatch
---@field allowed_ip? string
---@field amnezia? string
---@field dns? string
---@field keepalive? string
---@field mtu? string

local M = {}

return M
