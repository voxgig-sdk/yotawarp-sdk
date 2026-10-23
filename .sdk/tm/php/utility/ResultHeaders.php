<?php
declare(strict_types=1);

// Yotawarp SDK utility: result_headers

class YotawarpResultHeaders
{
    public static function call(YotawarpContext $ctx): ?YotawarpResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
