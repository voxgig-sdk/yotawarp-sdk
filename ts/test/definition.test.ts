import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "generate",
    "accessor": "Generate",
    "op": "load",
    "method": "GET",
    "path": "/api/generate",
    "args": [],
    "select": {
      "allowed_ip": "0.0.0.0/0, ::/0",
      "amnezia": "false",
      "dns": "1.1.1.1, 1.0.0.1",
      "keepalive": "25",
      "mtu": "1280"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "dns",
      "mtu",
      "allowed_ips",
      "keepalive",
      "amnezia"
    ],
    "queryArgs": [
      {
        "name": "allowed_ip",
        "wire": "allowed_ips"
      },
      {
        "name": "amnezia",
        "wire": "amnezia"
      },
      {
        "name": "dns",
        "wire": "dns"
      },
      {
        "name": "keepalive",
        "wire": "keepalive"
      },
      {
        "name": "mtu",
        "wire": "mtu"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "config": "x",
      "vpnKey": "x",
      "metadata": {
        "endpoint": "x",
        "ipv4": "x",
        "ipv6": "x",
        "amnezia": true,
        "generated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
