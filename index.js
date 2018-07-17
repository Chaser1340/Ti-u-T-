const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'tiểu tà') {
    msg.reply('dạ');
  }
});
client.on('message', msg => {
    if (msg.content === '!đệ đang làm gì đó') {
      msg.reply('đệ đang nghịch');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'ai đẹp trai nhất') {
      msg.reply('bảo ca');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Ai đẹp trai nhất') {
      msg.reply('bảo ca');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'hahaha') {
      msg.reply('hihihi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'kkk') {
      msg.reply('cười nghe thấy ớn quá đi');
    }
  });
  client.on('message', msg => {
    if (msg.content === '!一个非常简单而复杂的问题') {
      msg.reply('một vấn đề có vẻ đơn giản nhưng lại rất phức tạp');
    }
  });
client.login('NDY4NDE3OTI3MDMzNjUxMjAx.Di59pg.iZj-MsatPiHGkBTMfd2zRzLhuQs');