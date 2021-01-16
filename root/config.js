{
    "server_mode": "single or cluster",
    "root_user": "",
    "root_pass": "",
    "http_port": 80,
    "https_port": 443,
    "secret": "A2F7F6A86A0213D2AD74D25143DDEC56AA8A631EBC1A82014782E59B66D48A0B",
    "panel_domains": ["*", "root.nextnode.com"], 
    "cluster_opts": {
        "redis": [".."],
        "etcd": {
            "hosts": [".."],
            "auth": {"user": "..", "pass": ".."},
            "creds": { 
                "certChain": "file.crt",
                "privateKey": "file.key",
                "rootCert": "root.crt" 
            }
        }
    }
}