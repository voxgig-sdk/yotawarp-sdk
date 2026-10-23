# frozen_string_literal: true

# Typed models for the Yotawarp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Generate entity data model.
#
# @!attribute [rw] config
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] vpnKey
#   @return [String, nil]
Generate = Struct.new(
  :config,
  :metadata,
  :success,
  :vpnKey,
  keyword_init: true
)

# Request payload for Generate#load.
#
# @!attribute [rw] allowed_ip
#   @return [String, nil]
#
# @!attribute [rw] amnezia
#   @return [String, nil]
#
# @!attribute [rw] dns
#   @return [String, nil]
#
# @!attribute [rw] keepalive
#   @return [String, nil]
#
# @!attribute [rw] mtu
#   @return [String, nil]
GenerateLoadMatch = Struct.new(
  :allowed_ip,
  :amnezia,
  :dns,
  :keepalive,
  :mtu,
  keyword_init: true
)

