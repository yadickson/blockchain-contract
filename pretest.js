const lsof = require('lsof/lib/lsof');
const kill = require('tree-kill');

lsof.rawTcpPort(8565, function(data) {
  if (data.length > 0) {
    return kill(data[0].pid);
  }
});
