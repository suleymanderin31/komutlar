const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("Suprabot | Yardım")
.setDescription("**Özel Mesajlarını Kontrol Et** :postbox:")
 message.channel.send(embed)
  
  const embedyardim = new Discord.RichEmbed()
  .setAuthor("SupraBot | Yardım")
 
  .setColor("RANDOM")
  .addField("**» Genel Komutlar**", "sb!yardım** : Komutları Gösterir.\nsb!yaz** : Bota İstediğinizi Yazdırırsınız.\nsb!sunucubilgi** : Sunucu Hakkında Bilgi Verir.\nsb!kullanıcıbilgim** : Hakkınızdaki Bilgileri Gösterir.\nsb!avatar** : Avatarınızı Gösterir.\nsb!istatistik** : Botun İstatistiklerini Gösterir.\nsb!tavsiye** : Botun Yapımcısına Tavsiyenizi Gönderir.\nsb!canlıdestek** : Canlı Destek Talebi Oluşturur.\nsb!bilgi** : Bot hakkında bilgiler verir.\n!davet** : Botun davet linkini atar.\nsb!havadurumu : İstediğiniz şehrin hava durumunu atar")
  .addField("**» Sunucu Yetkilisi Komutları**", "sb!ban** : Kullanıcıyı Sunucudan Banlar.\nsb!kick** : Kullanıcıyı Sunucudan Atar.\nsb!sustur** : Kullanıcıyı Sunucuda Susturur.\nsb!oylama** : Oylama Açar.\nsb!duyuru** : Duyuru Açar.\nsb!çekiliş** : Çekiliş yapmanızı sağlar.\nsb!temizle** : Belirttiğiniz kadar mesajı siler.\n**sb!ses-kanal-aç** : Bir ses kanalı açar \nsb!yazı-kanal-aç :**Bir yazı kanalı açar** \n**sb!rol-ver** : İstediğiniz kişiyi istediğiniz rolü verir. ")
  .addField("**» Eğlence Komutları**", "sb!1vs1** : Seçtiğiniz 2 kişi arasında savaş yapar.\nsb!5vs5** : Seçtiğiniz 5 kişi arasında savaş yapar.\nsb!çekiç** : Bir kişiye çekiç atmanızı sağlar.\nsb!nicegif** : Rastgele gif atar.\nsb!slots** : Slot oyunu oynamanızı sağlar.")
  .addField("**» Oyun Komutları**", "sb!mcsunucu** : Minecraft sunucunuzun bilgisini atar.\nsb!mcskin** : Minecraft skini atar.\nsb!mcbaşarım** : Minecraft başarılarınızı atar.\nsb!mcödül** : Minecraft kutu açar.")
  .addField("**» Müzik Komutları**", "**sb!çal** : Bota istediğniz şarkıyı çaldırırsınız. \nsb!geç : Bot bir sonraki şarkıya geçer \nsb!dur : Şarkıyı durdurursunuz \nsb!ses : Şarkının sesini ayarlarsınız \nsb!çalan : Çalan şarkıyı gösterir. \nsb!kuyruk : Müzik kuyruğunu gösterir \nsb!duraklat : Çalan şarkıyı duraklatır \nsb!devam : Şarkıyı devam ettirir")
  .addField("**» Yapımcı Komutları**", " sb!destek** : Yapımcı Komutu.\nsb!destekkanalı** : Yapımcı Komutu.\nsb!toplumesaj** : Yapımcı Komutu.\nsb!sunucular** : Yapımcı Komutu.\nsb!ayrıl** : Yapımcı Komutu\nsb!eval** : Yapımcı Komutu\nsb!reboot** : Yapımcı Komutu")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    console.log("sb!yardım komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
    message.author.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
