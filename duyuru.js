const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply(':x:**Duyurmam İçin Birşey Yazmalısınız**:x:');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
		.setTitle("Duyuru")
		.setFooter("Supra Bot")
    .setDescription(`**${mesaj}**`)
		console.log("sb!duyuru komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
