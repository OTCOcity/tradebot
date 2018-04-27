const botClassList = require('./bots/init.js');

const BitMEXClient = require('bitmex-realtime-api');
const fs = require('fs');
const express = require('express');
const app = express();


// Read Bot Data
const botList = [];
fs.readdir('./data', (err, files) => {
  files.forEach(file => {
    fs.readFile(`./data/${file}`, 'utf8', function (err, data) {
      if (err) throw err;
      const jsonData = JSON.parse(data);
      botList.push(new botClassList[jsonData.bot_type](jsonData));
    });
  });
});


// setInterval(function () {
//
//   botList.forEach(bot => {
//     bot.listen();
//   });
//
// }, 1000);


const client = new BitMEXClient({
  testnet: true,
  apiKeyID: 'VwRrs68VPVpGWqNIQbwnZAvb',
  apiKeySecret: 'pjWPmm_S1QSPvAeYGgPsuZoHjg15mOGr8bcHtJFZ02A-xo3z'
});

client.addStream('XBTUSD', 'instrument', () => {
  const values = client.getTable('instrument').XBTUSD;
  values && console.log(`Price: ${values[0].lastPriceProtected} $`);
  // console.log(values[0].lastPriceProtected);
});


// EXPRESS INIT ON localhost:3000
// app.get('/', function (req, res) {
//   res.send('APP.js always running with PM! Hello!');
// });
//
//
// app.listen(3000, function () {
// });
