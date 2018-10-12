const Discord = require('discord.js');

exports.run = (client, message, args) => {
     message.delete();

    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply(':x:**Duyurmam İçin Birşey Yazmalısınız**:x:');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Duyuru")
    .setFooter("Supra bot")
    .setDescription(`**${mesaj}**`)
    message.channel.send(embed).catch()
    message.guild.members.forEach(member => {
      member.user.send(embed).catch()
    });
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tm'],
  permLevel: 5
};

exports.help = {
  name: 'toplumesaj',
  description: 'Toplu Mesaj Gönderir.',
  usage: 'tm [Duyuruda Yazıcak Şey]'
};
