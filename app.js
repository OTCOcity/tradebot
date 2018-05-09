// const botClassList = require('./bots/init.js');
//
// const BitMEXClient = require('bitmex-realtime-api');
// const fs = require('fs');


const cors = require('cors');
const moment = require('moment');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

moment.locale('ru');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());

// Use headers for Cross-origin policy
app.use(cors());


// Read Bot Data
// const botList = [];
// fs.readdir('./data', (err, files) => {
//   files.forEach(file => {
//     fs.readFile(`./data/${file}`, 'utf8', function (err, data) {
//       if (err) throw err;
//       const jsonData = JSON.parse(data);
//       botList.push(new botClassList[jsonData.bot_type](jsonData));
//     });
//   });
// });


// setInterval(function () {
//
//   botList.forEach(bot => {
//     bot.listen();
//   });
//
// }, 1000);


// const client = new BitMEXClient({
//   testnet: true,
//   apiKeyID: 'VwRrs68VPVpGWqNIQbwnZAvb',
//   apiKeySecret: 'pjWPmm_S1QSPvAeYGgPsuZoHjg15mOGr8bcHtJFZ02A-xo3z'
// });

// client.addStream('XBTUSD', 'instrument', () => {
//   const values = client.getTable('instrument').XBTUSD;
//   values && console.log(`Price: ${values[0].lastPriceProtected} $`);
//    console.log(values[0].lastPriceProtected);
// });


const statusList = ['close', 'finish', 'active', 'error', 'cancel'];

function randomStatus() {
  return statusList[Math.floor(Math.random() * 5)];
}

const botListData = [
  {
    id: 1,
    market: 'cex',
    type: 'RepBot',
    symbols: 'BTX/USD',
    createdAt: moment.unix(1525436029).fromNow(),
    updatedAt: moment.unix(1525418352).fromNow(),
    name: 'RepBot #1',
    status: 'active',
    options: [
      {
        key: 'bot',
        label: 'Бот',
        value: 'RepBot'
      },
      {
        key: 'market',
        label: 'Биржа',
        value: 'Bitmex'
      },
      {
        key: 'symbols',
        label: 'Валюты',
        value: 'BTX/USD'
      },
      {
        key: 'buyFrom',
        label: 'Покупать от',
        value: '900 USD'
      },
      {
        key: 'sellFrom',
        label: 'Продавать от',
        value: '1000 USD'
      }
    ],
    orders: [
      {
        message: 'Причина создания ордеров bla bla bla',
        createdAt: '1525418352316',
        list: [
          {
            id: '465',
            type: 'buy',
            symbol1: 'BTX',
            symbol2: 'USD',
            createdAt: '1525418352316',
            price: '1000',
            quantity: '500',
            status: randomStatus(),
          },
          {
            id: '461',
            type: 'sell',
            symbol1: 'BTX',
            symbol2: 'USD',
            createdAt: '1525418352316',
            price: '1100',
            quantity: '600',
            status: randomStatus(),
          },
          {
            id: '265',
            type: 'sell',
            symbol1: 'BTX',
            symbol2: 'USD',
            createdAt: '1525418352316',
            price: '1200',
            quantity: '100',
            status: randomStatus(),
          }
        ]

      },
      {
        message: 'Цена достигла 20000 USD',
        createdAt: '1525418352316',
        list: [
          {
            id: '461',
            type: 'sell',
            symbol1: 'BTX',
            symbol2: 'USD',
            createdAt: '1525418352316',
            price: '1000',
            quantity: '500',
            status: randomStatus(),
          },
          {
            id: '261',
            type: 'sell',
            symbol1: 'BTX',
            symbol2: 'USD',
            createdAt: '1525418352316',
            price: '1100',
            quantity: '600',
            error: 'Не достаточно средств для создания ордера',
            status: randomStatus(),
          }
        ]

      }
    ]

  },
  {
    id: 2,
    market: 'bitmex',
    type: 'SimpleBot',
    symbols: 'USD/BTX',
    createdAt: moment.unix(1525426029).fromNow(),
    updatedAt: moment.unix(1525418352).fromNow(),
    name: 'RepBot #2',
    status: 'stop',
    options: [
      {
        key: 'buyFrom',
        label: 'Покупать от',
        value: '900 USD'
      },
      {
        key: 'sellFrom',
        label: 'Продавать от',
        value: '1000 USD'
      },
      {
        key: 'symbols',
        label: 'Валюты',
        value: 'BTX/USD'
      }
    ],
    orders: [
      {
        message: 'Причина RepBot #2',
        createdAt: '1525418352316',
        list: [
          {
            id: '465',
            type: 'sell',
            symbol1: 'BTX',
            symbol2: 'USD',
            createdAt: '1525418352316',
            price: '1000',
            quantity: '500',
            status: randomStatus(),
          },
          {
            id: '461',
            type: 'sell',
            symbol1: 'BTX',
            symbol2: 'USD',
            createdAt: '1525418352316',
            price: '1100',
            quantity: '600',
            status: randomStatus(),
          },
          {
            id: '265',
            type: 'sell',
            symbol1: 'BTX',
            symbol2: 'USD',
            createdAt: '1525418352316',
            price: '1200',
            quantity: '100',
            error: 'Не достаточно средств для создания ордера',
            status: randomStatus(),
          }
        ]

      },
      {
        message: 'Цена достигла 20000 USD RepBot #2',
        createdAt: '1525418352316',
        list: [
          {
            id: '461',
            type: 'sell',
            symbol1: 'BTX',
            symbol2: 'USD',
            createdAt: '1525418352316',
            price: '1000',
            quantity: '500',
            status: randomStatus(),
          },
          {
            id: '261',
            type: 'sell',
            symbol1: 'BTX',
            symbol2: 'USD',
            createdAt: '1525418352316',
            price: '1100',
            quantity: '600',
            status: randomStatus(),
          }
        ]

      }
    ]

  }
];

// Return bot list array
app.get('/botlist', function (req, res) {

  // If first request return immediately
  const timeoutDelay = req.query.time == 0 ? 100 : 9000;

  setTimeout(function () {
    res.json({
      req: req.query,
      messages: [
        {
          text: 'Список ботов обновлен!',
          type: 'info'
        },
      ],
      data: botListData,
      balanceUsd: ((Math.random() * (5 - 0)) + 0).toFixed(8),
      balanceBtc: ((Math.random() * (100 - 10)) + 10).toFixed(8),
      time: Date.now(),
    });
  }, timeoutDelay);
});

// Return bot by id
app.get('/botlist/:id', function (req, res) {

  botListData.forEach(function (bot) {
    if (bot.id == req.params.id) {
      res.json(bot);
    }
  });

  res.status(403).send('Forbidden');

});

// Stop bot by id
app.get('/stop/:id', function (req, res) {

  botListData.forEach(function (bot) {
    if (bot.id == req.params.id) {
      bot.status = 'stop';
      res.json(bot);
    }
  });

  res.status(404).send('Not found');

});

// Start bot by id
app.get('/start/:id', function (req, res) {

  botListData.forEach(function (bot) {
    if (bot.id == req.params.id) {
      bot.status = 'active';
      res.json(bot);
    }
  });

  res.status(404).send('Not found');

});

// Delete bot by id
app.get('/delete/:id', function (req, res) {

  botListData.forEach(function (bot, index) {
    if (bot.id == req.params.id) {

      const deletedBot = Object.assign({}, bot);
      botListData.splice(index, 1);

      res.json({
        function: 'deleteBotSuccess',
        data: deletedBot,
        messages: {
          type: 'danger',
          text: 'Бот был успешно удален!'
        }
      });
    }
  });

  res.status(404).send('Not found');

});

// Create new bot
app.post('/create', function (req, res) {

  const newBot = Object.assign({}, botListData[0], req.body);
  const createAt = moment.unix(Math.floor((new Date()) / 1000)).fromNow();

  newBot.id = botListData.length + 1;
  newBot.createdAt = createAt;
  newBot.updatedAt = createAt;
  botListData.push(newBot);
  res.json({
    function: 'createBotSuccess',
    data: newBot,
    messages: {
      type: 'success',
      text: `#${newBot.id}. ${newBot.name} был успешно создан!`
    }
  });
});

// Save bot data
app.post('/save/:id', function (req, res) {
  botListData.forEach(function (bot, index) {
    if (bot.id === +req.params.id) {
      botListData[index] = Object.assign(botListData[index], req.body);
      res.json({
        function: 'saveBotSuccess',
        data: botListData[index],
        messages: {
          type: 'success',
          text: `#${botListData[index].name}. ${botListData[index].name} был успешно изменен!`
        }
      });
    }
  });

  res.status(404).send('Not Found');
});


// EXPRESS INIT ON localhost:3000
app.listen(3000, function () {
});
