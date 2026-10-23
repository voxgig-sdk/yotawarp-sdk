// Typed models for the Yotawarp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Generate {
  config: string
  metadata: Record<string, any>
  success: boolean
  vpnKey?: string
}

export interface GenerateLoadMatch {
  allowed_ip?: string
  amnezia?: string
  dns?: string
  keepalive?: string
  mtu?: string
}

