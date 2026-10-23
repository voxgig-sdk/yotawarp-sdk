<?php
declare(strict_types=1);

// Yotawarp SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class YotawarpMakeContext
{
    public static function call(array $ctxmap, ?YotawarpContext $basectx): YotawarpContext
    {
        return new YotawarpContext($ctxmap, $basectx);
    }
}
