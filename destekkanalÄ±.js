const Discord = require('discord.js');
const jsonfile = require('jsonfile');
const fs = require('fs');

exports.run = (client, message, args) => {
    if (args[0] === "ekle") {
        message.delete().catch();
        try {
            let exists = fs.existsSync('./jsonlar/destek.json')
            if (exists) {
                obj = jsonfile.readFileSync('./jsonlar/destek.json')
                if (!obj[message.member.guild.id]) obj[message.member.guild.id] = "";
                obj[message.member.guild.id] = message.channel.id;
                jsonfile.writeFileSync('./jsonlar/destek.json',obj);
                message.channel.send("✅ Destek Kanalı Ayarlandı!").then(msg =>{
                    setTimeout(()=>{
                        msg.delete().catch()
                    },5000)
                }).catch()
            }
        } catch (ex) {
            console.error(ex)
            message.channel.send("❌ Destek Kanalı Ayarlanamadı!").then(msg =>{
                setTimeout(()=>{
                    msg.delete().catch()
                },5000)
            }).catch()
        }
    } else if (args[0] === "kaldır") {
        message.delete().catch();
        try {
            let exists = fs.existsSync('./jsonlar/destek.json')
            if (exists) {
                obj = jsonfile.readFileSync('./jsonlar/destek.json')
                if (obj[message.member.guild.id]) delete obj[message.member.guild.id];
                jsonfile.writeFileSync('./jsonlar/destek.json',obj);
                message.channel.send("✅ Destek Kanalı Kaldırıldı!").then(msg =>{
                    setTimeout(()=>{
                        msg.delete().catch()
                    },5000)
                }).catch()
            }
        } catch (ex) {
            console.error(ex)
            message.channel.send("❌ Destek Kanalı Kaldırılamadı!").then(msg =>{
                setTimeout(()=>{
                    msg.delete().catch()
                },5000)
            }).catch()
        }
    } else {
        message.channel.send("❌ Lütfen doğru parametreleri giriniz!").catch()
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek-kanalı'],
  permLevel: 0
};

exports.help = {
  name: 'destekkanalı',
  description: 'Yazılan kanalı destek kanalı yapar.',
  usage: 'destekkanalı [ekle/kaldır]'
};
