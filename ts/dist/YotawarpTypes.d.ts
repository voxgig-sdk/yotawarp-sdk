export interface Generate {
    config: string;
    metadata: Record<string, any>;
    success: boolean;
    vpnKey?: string;
}
export interface GenerateLoadMatch {
    allowed_ip?: string;
    amnezia?: string;
    dns?: string;
    keepalive?: string;
    mtu?: string;
}
