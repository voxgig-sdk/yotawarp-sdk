"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GenerateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when YOTAWARP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('YOTAWARP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.YotawarpSDK.test();
        const ent = testsdk.Generate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.YotawarpSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Generate().load({ "allowed_ip": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.YOTAWARP_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'generate.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "config": { "a": true, "h": "Config", "n": "config", "r": true, "sh": "Complete WireGuard (or AmneziaWG when amnezia=true) .conf text: [Interface] with a freshly generated PrivateKey, Address, DNS, MTU (plus AmneziaWG obfuscation keys S1/S2/Jc/Jmin/Jmax/H1-H4/I1 when amnezia=true) and [Peer] with PublicKey,…", "t": "`$STRING`", "key$": "config", "index$": 0 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": true, "t": "`$OBJECT`", "key$": "metadata", "index$": 1 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "true on success.", "t": "`$BOOLEAN`", "key$": "success", "index$": 2 }, "vpnKey": { "a": true, "h": "Vpn Key", "n": "vpnKey", "r": false, "sh": "AmneziaVPN import key: 'vpn://' followed by a base64 payload.", "t": "`$STRING`", "key$": "vpnKey", "index$": 3 } }, "name": "generate", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/generate", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "0.0.0.0/0, ::/0", "k": "query", "n": "allowed_ip", "or": "allowed_ips", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "false", "k": "query", "n": "amnezia", "or": "amnezia", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "1.1.1.1, 1.0.0.1", "k": "query", "n": "dns", "or": "dns", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "25", "k": "query", "n": "keepalive", "or": "keepalive", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "1280", "k": "query", "n": "mtu", "or": "mtu", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/api/generate", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "generate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "generate", "name__orig": "generate", "Name": "Generate", "name_": "generate", "name-": "generate", "NAME": "GENERATE", "index$": 0 }, { "active": true, "entity": "generate", "key$": "BasicGenerateFlow", "kind": "basic", "name": "BasicGenerateFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "generate_ref01", "srcdatavar": "generate_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-generate_ref01" } }], "index$": 0 }] }, 'Generate', { "GET /api/generate": { "protocol": "http", "parameters": [{ "name": "dns", "in": "query", "required": false, "description": "Comma-separated DNS servers written to the Interface DNS line. Default '1.1.1.1, 1.0.0.1, 2606:4700:4700::1111, 2606:4700:4700::1001'.", "schema": { "type": "string" }, "example": "1.1.1.1, 1.0.0.1", "index$": 0 }, { "name": "mtu", "in": "query", "required": false, "description": "Interface MTU, copied into the config without validation. Default 1280.", "schema": { "type": "string" }, "example": "1280", "index$": 1 }, { "name": "allowed_ips", "in": "query", "required": false, "description": "Comma-separated Peer AllowedIPs. Default '0.0.0.0/0, ::/0'.", "schema": { "type": "string" }, "example": "0.0.0.0/0, ::/0", "index$": 2 }, { "name": "keepalive", "in": "query", "required": false, "description": "Peer PersistentKeepalive in seconds. Default 25.", "schema": { "type": "string" }, "example": "25", "index$": 3 }, { "name": "amnezia", "in": "query", "required": false, "description": "'true' adds AmneziaWG obfuscation parameters (DPI bypass); default 'false' (plain WireGuard).", "schema": { "type": "string", "enum": ["true", "false"] }, "example": "false", "index$": 4 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let generate_ref01_data = Object.values(setup.data.existing.generate)[0];
        // LOAD
        const generate_ref01_ent = client.Generate();
        const generate_ref01_match_dt0 = {};
        const generate_ref01_data_dt0 = (await generate_ref01_ent.load(generate_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != generate_ref01_data_dt0);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/generate/GenerateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.YotawarpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['generate01', 'generate02', 'generate03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'YOTAWARP_TEST_GENERATE_ENTID': idmap,
        'YOTAWARP_TEST_LIVE': 'FALSE',
        'YOTAWARP_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['YOTAWARP_TEST_GENERATE_ENTID'];
    const live = 'TRUE' === env.YOTAWARP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['YOTAWARP_TEST_GENERATE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.YotawarpSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.YOTAWARP_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GenerateEntity.test.js.map