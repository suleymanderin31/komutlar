const Discord = require('discord.js');

exports.run = (client, message, args) => {
 message.delete();
    message.guild.createChannel(`talep-${message.author.username}`, 'text').then(ch => {
        ch.overwritePermissions(message.member.roles.first(),{
            VIEW_CHANNEL: false,
        }).catch()
        message.guild.roles.forEach((role) => {
            if (role.hasPermission("BAN_MEMBERS")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        })

        const embed = new Discord.RichEmbed()
        .setTitle(`» Hey ${message.author.username} !`)
        .setAuthor("»Suprabot| Destek Sistemi")
        .setDescription("Buradaki destek ekibimiz sizinle ilgilenecektir.\nDestek talebini iptal etmek için [sb!!kapat](yigitinsitesi.com) yazabilirsin!")
        .setFooter("Suprabot| Destek Sistemi")
        .setTimestamp()
        ch.send(embed).catch()
        ch.send("@here")
        ch.awaitMessages((msg)=> {
            if (msg.content === "sb!kapat") {
                ch.send("Talebiniz iptal ediliyor!").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Destek Sunucusuna Yollar.',
  usage: 'destek'
};
