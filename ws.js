const WebSocket = require('ws');

const ws = new WebSocket('wss://www.bitmex.com/realtime?subscribe=tradeBin1m');

ws.on('open', function open() {
  console.log('Ws open success');
});

ws.on('message', function incoming(data) {

  data = JSON.parse(data);
  data.data && console.log(data.data[0]);

  // data.data && data.data.forEach(function (e) {
  //   console.log(`${e.user}: ${e.message}`);
  //
  // });
});
