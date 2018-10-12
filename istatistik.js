const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg, params) => {
  msg.delete();
  console.log("sb!istatistik komutu " + msg.author.username + '#' + msg.author.discriminator + " tarafından kullanıldı.")

   const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("» Botun Sahibi", "Yiğit Veli Gündoğan")
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField("» Çalışma süresi", duration)
  .addField("» Kullanıcılar", client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» Sunucular", client.guilds.size.toLocaleString(), true)
  .addField("» Kanallar", client.channels.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField("» Ping", client.ping+" ms", true)
  return msg.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istatistik","i"],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
