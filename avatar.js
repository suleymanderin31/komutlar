const Discord = require('discord.js');

exports.run = (client, message, args) => {
     message.delete();

let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor([0,101,255])
  .setImage(mention.avatarURL)
  .addField('Supra| Avatar Sistemi', `[Avatarın büyük halini göster!](${mention.avatarURL})`, false);
  message.react("����");
  message.channel.sendEmbed(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor([0,101,255])
  .setImage(message.author.avatarURL)
  .addField('Supra| Avatar Sistemi', `[Avatarın büyük halini göster!](${message.author.avatarURL})`, false);
  console.log("yvs!avatar komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
  message.channel.sendEmbed(avatarEmbedYou);
  return;
}
message.channel.sendMessage("An error occured!");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Avatar Bulur',
  usage: 'avatar'
};
