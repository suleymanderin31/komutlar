const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
     message.delete();

    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setFooter("SupraBot")
      .setTimestamp()
      .addField('Ad:', message.author.username + '#' + message.author.discriminator)
      .addField('ID:', message.author.id)
      .addField('Kayıt tarihi:', message.author.createdAt)
      .addField('Durum:', durm)
      .addField('Oynadığın Oyun:', message.author.presence.game ? message.author.presence.game.name : 'Şu an oyun oynamıyor')
      .addField('BOT musun?', message.author.bot ? '\n Evet' : 'Hayır')
      console.log("sb!kullanıcıbilgim komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı bilgim'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıbilgim',
  description: 'Komutu kullanan kişi hakkında bilgi verir.',
  usage: 'kullanıcıbilgim'
};
