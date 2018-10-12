const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  if (msg.channel.type === "dm" || msg.channel.type === "group") {
    return;
  };
  if (msg.member.hasPermission("KICK_MEMBERS")) {
    return msg.reply("Beni sunucudan gönderdiğin için üzgünüm... :wave:").then(m => {
      m.guild.leave().then(g => {
        console.log(`Bir sunucudan çıkarıldım.\n    Adı: ${g.name}\n    ID: ${g.id}\n    Sahibi: ${g.owner.user.tag} (${g.ownerID})\n    Çıkaran Kişi: ${msg.author.tag} (${msg.author.id})\n`);
      }).catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  } else {
    return msg.reply("Sen sahtekarsın adi...").catch(e => {console.error(e);})}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 0
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot sunucudan ayrılır.',
  usage: 'ayrıl'
};