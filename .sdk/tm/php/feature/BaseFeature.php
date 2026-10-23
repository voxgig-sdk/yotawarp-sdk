<?php
declare(strict_types=1);

// Yotawarp SDK base feature

class YotawarpBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(YotawarpContext $ctx, array $options): void {}
    public function PostConstruct(YotawarpContext $ctx): void {}
    public function PostConstructEntity(YotawarpContext $ctx): void {}
    public function SetData(YotawarpContext $ctx): void {}
    public function GetData(YotawarpContext $ctx): void {}
    public function GetMatch(YotawarpContext $ctx): void {}
    public function SetMatch(YotawarpContext $ctx): void {}
    public function PrePoint(YotawarpContext $ctx): void {}
    public function PreSpec(YotawarpContext $ctx): void {}
    public function PreRequest(YotawarpContext $ctx): void {}
    public function PreResponse(YotawarpContext $ctx): void {}
    public function PreResult(YotawarpContext $ctx): void {}
    public function PreDone(YotawarpContext $ctx): void {}
    public function PreUnexpected(YotawarpContext $ctx): void {}
}
