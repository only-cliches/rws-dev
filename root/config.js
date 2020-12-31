{
    "database": "local or etcd",
    "root_pass": "",
    "panel_domains": ["*", "root.nextnode.com"], 
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