const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Eval;').setDescription(message.author.username + ', bu komutu direkt mesajda kullanamazsın.').setFooter('Suprabot.', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 5) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription(message.author.tag + ', kullanım: sb!5vs5 <@kullanıcı> <@kullanıcı> <@kullanıcı> <@kullanıcı> <@kullanıcı>.').setFooter('BlackArmy.', client.user.avatarURL).setTimestamp());
      message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaş başladı!').setFooter('BlackArmy.', client.user.avatarURL).setTimestamp())
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaşılıyor %25.').setFooter('BlackArmy.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaşılıyor %50.').setFooter('BlackArmy.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaşılıyor %75.').setFooter('BlackArmy.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaşılıyor %100.').setFooter('BlackArmy.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaş bitti!').setFooter('BlackArmy.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Kazanan: ' + user.tag).setFooter('BlackArmy.', client.user.avatarURL).setTimestamp()))
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '5vs5',
  description: 'Seçtiğiniz 5 kişi arasında savaş yapılır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
