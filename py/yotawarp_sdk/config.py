# Yotawarp SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Yotawarp",
            "slug": "yotawarp",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://yota-warp-self.vercel.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "generate": {},
            },
        },
        "entity": {
      "generate": {
        "fields": [
          {
            "name": "config",
            "title": "Config",
            "type": "`$STRING`",
            "req": True,
            "short": "Complete WireGuard (or AmneziaWG when amnezia=true) .conf text: [Interface] with a freshly generated PrivateKey, Address, DNS, MTU (plus AmneziaWG obfuscation keys S1/S2/Jc/Jmin/Jmax/H1-H4/I1 when amnezia=true) and [Peer] with PublicKey,…",
          },
          {
            "name": "metadata",
            "title": "Metadata",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "success",
            "title": "Success",
            "type": "`$BOOLEAN`",
            "req": True,
            "short": "true on success.",
          },
          {
            "name": "vpnKey",
            "title": "Vpn Key",
            "type": "`$STRING`",
            "short": "AmneziaVPN import key: 'vpn://' followed by a base64 payload.",
          },
        ],
        "name": "generate",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/generate",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "generate",
                  },
                ],
                "parts": [
                  "api",
                  "generate",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "allowed_ip",
                      "orig": "allowed_ips",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "0.0.0.0/0, ::/0",
                    },
                    {
                      "name": "amnezia",
                      "orig": "amnezia",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "false",
                    },
                    {
                      "name": "dns",
                      "orig": "dns",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "1.1.1.1, 1.0.0.1",
                    },
                    {
                      "name": "keepalive",
                      "orig": "keepalive",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "25",
                    },
                    {
                      "name": "mtu",
                      "orig": "mtu",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "1280",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
