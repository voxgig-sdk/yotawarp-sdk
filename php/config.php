<?php
declare(strict_types=1);

// Yotawarp SDK configuration

class YotawarpConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Yotawarp",
                "slug" => "yotawarp",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'now' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://yota-warp-self.vercel.app",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "generate" => [],
                ],
            ],
            "entity" => [
        'generate' => [
          'fields' => [
            [
              'name' => 'config',
              'title' => 'Config',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Complete WireGuard (or AmneziaWG when amnezia=true) .conf text: [Interface] with a freshly generated PrivateKey, Address, DNS, MTU (plus AmneziaWG obfuscation keys S1/S2/Jc/Jmin/Jmax/H1-H4/I1 when amnezia=true) and [Peer] with PublicKey,…',
            ],
            [
              'name' => 'metadata',
              'title' => 'Metadata',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'true on success.',
            ],
            [
              'name' => 'vpnKey',
              'title' => 'Vpn Key',
              'type' => '`$STRING`',
              'short' => 'AmneziaVPN import key: \'vpn://\' followed by a base64 payload.',
            ],
          ],
          'name' => 'generate',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/generate',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'generate',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'generate',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'allowed_ip',
                        'orig' => 'allowed_ips',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '0.0.0.0/0, ::/0',
                      ],
                      [
                        'name' => 'amnezia',
                        'orig' => 'amnezia',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'false',
                      ],
                      [
                        'name' => 'dns',
                        'orig' => 'dns',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '1.1.1.1, 1.0.0.1',
                      ],
                      [
                        'name' => 'keepalive',
                        'orig' => 'keepalive',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '25',
                      ],
                      [
                        'name' => 'mtu',
                        'orig' => 'mtu',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '1280',
                      ],
                    ],
                  ],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return YotawarpFeatures::make_feature($name);
    }
}
