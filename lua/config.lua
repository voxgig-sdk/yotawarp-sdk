-- Yotawarp SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Yotawarp",
      slug = "yotawarp",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["now"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://yota-warp-self.vercel.app",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["generate"] = {},
      },
    },
    entity = {
      ["generate"] = {
        ["fields"] = {
          {
            ["name"] = "config",
            ["title"] = "Config",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Complete WireGuard (or AmneziaWG when amnezia=true) .conf text: [Interface] with a freshly generated PrivateKey, Address, DNS, MTU (plus AmneziaWG obfuscation keys S1/S2/Jc/Jmin/Jmax/H1-H4/I1 when amnezia=true) and [Peer] with PublicKey,…",
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "true on success.",
          },
          {
            ["name"] = "vpnKey",
            ["title"] = "Vpn Key",
            ["type"] = "`$STRING`",
            ["short"] = "AmneziaVPN import key: 'vpn://' followed by a base64 payload.",
          },
        },
        ["name"] = "generate",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/generate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["parts"] = {
                  "api",
                  "generate",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "allowed_ip",
                      ["orig"] = "allowed_ips",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "0.0.0.0/0, ::/0",
                    },
                    {
                      ["name"] = "amnezia",
                      ["orig"] = "amnezia",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "false",
                    },
                    {
                      ["name"] = "dns",
                      ["orig"] = "dns",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "1.1.1.1, 1.0.0.1",
                    },
                    {
                      ["name"] = "keepalive",
                      ["orig"] = "keepalive",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "25",
                    },
                    {
                      ["name"] = "mtu",
                      ["orig"] = "mtu",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "1280",
                    },
                  },
                },
                ["select"] = {},
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
