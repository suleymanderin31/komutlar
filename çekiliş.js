const Discord = require('discord.js');

exports.run = function(client, message, args) {  
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu Komutu Kullanmanız İçin Yetkiniz Yeterli Değildir.");
  const hata = message.client.emojis.get("441925011360710666");
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send(`${hata}` + ' Lütfen Bir Çekiliş İsmi Girin!');
if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Rastgele kullanıcı;').setDescription(message.author.username + ', bu komutu direkt mesajda kullanamazsın.').setFooter('DES', client.user.avatarURL).setTimestamp()); }
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Kazanan Kullanıcı;')
    .setDescription(message.guild.members.random().displayName)
    .setFooter('Suprabot', client.user.avatarURL)
    .addField('Çekiliş İsmi;', `${mesaj}`)
    .setTimestamp()
    message.channel.send(embed);

  };
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['çekiliş'],
  permLevel: 2
};

exports.help = {
  name: 'çekiliş',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};