const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Saturn BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Invite Me`)
    .setDescription(`• [Invite Me](https://discord.com/api/oauth2/authorize?client_id=976097733381349386&permissions=8&scope=bot)`)
    .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `Saturn bot`,
      client.user.displayAvatarURL(),
      message.delete()
    );
    
    message.channel .send(embed)
    
  
  }
}