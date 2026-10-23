<?php
declare(strict_types=1);

// Typed models for the Yotawarp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Generate entity data model. */
class Generate
{
    public string $config;
    public array $metadata;
    public bool $success;
    public ?string $vpnKey = null;
}

/** Request payload for Generate#load. */
class GenerateLoadMatch
{
    public ?string $allowed_ip = null;
    public ?string $amnezia = null;
    public ?string $dns = null;
    public ?string $keepalive = null;
    public ?string $mtu = null;
}

