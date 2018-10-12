const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let slots = ["🍎",  "🍌", "🍒", "🍓", "🍈"];
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));
  let name = message.author.displayName;
  let msg = await message.channel.send("**Slots Oynanılıyor...**");
  let aicon = message.author.displayAvatarURL;    
      if (slots[result1] === slots[result2] && slots[result3]){ 
      let wEmbed = new Discord.RichEmbed()
       .setFooter("Kazandın!!",aicon)
       .setTitle(':slot_machine:Slots:slot_machine:')
       .addField('Sonuç:', slots[result1] + slots[result2] + slots[result3], true)
       .setColor("#f4e842");
      await message.channel.send(wEmbed);
       
          }else {
       
       let embed = new Discord.RichEmbed()
       .setFooter('Kaybettin!',aicon)
       .setTitle(':slot_machine:Slots:slot_machine:')
       .addField('Sonuç', slots[result1] + slots[result2] + slots[result3], true)
       .setColor("#f4e842");
     await  message.channel.send(embed);
      
       }   
  if (slots[result1] ==  slots[result2] == slots[result1] && slots[result3] == slots[result1]){
    let embed = new Discord.RichEmbed()
       .setFooter('Jackpotu kazandın!',aicon)
       .setTitle(':slot_machine:Slots:slot_machine:')
       .addField('Sonuç', slots[result1] + slots[result2] + slots[result3], true)
       .setColor("#f4e842");
     await  message.channel.send(embed);
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['slots'],
  permLevel: 0
};

exports.help = {
  name: 'slots',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};