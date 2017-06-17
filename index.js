const Discord = require("discord.js");
const config = require("./config.json");
const path = require("path");
const client = new Discord.Client();
const fs = require("fs");

//Ready
client.on('ready', message=> {
   console.log("Up")
   client.user.setGame("games | " + config.prefix + "help"
});

//Commands
client.on('message', message => {
  if(message.content === config.prefix + "ping") {
    ping = Math.floor(client.ping);
    const embed = new Discord.RichEmbed();
      embed.setTitle("My Ping Is " + ping + "ms");
      embed.setAuthor("🏓 Pong!");
      embed.setColor(0xcd201f)
    message.channel.send({embed});
  } else
     
if(message.content === config.prefix + "help owner") {
   if (message.author.id !== config.ownerID) return;
      const embed = new Discord.RichEmbed()
        .setColor(0xcd201f)
        .setTitle("`Help for Owners`")
        .setDescription("--------------------")
        .addField(config.prefix + "name", "Changes username", true)
        .addField(config.prefix + "game", "Sets BOT game", true)
      message.channel.send({embed})
  } else
     
     if (message.content.startsWith(config.prefix + "help admin") {
         if (!message.member.hasPermission("ADMINISTRATOR") return;
         const embed = new Discord.RichEmbed()
        .setTitle("`Help for Admins`")
        .setDescription("Currently none.")
         message.channel.send({embed})
         } else

  if(message.content === config.prefix + "help") {
    const embed = new Discord.RichEmbed()
      .setColor(0xcd201f)
      .setTitle("`Help for GameBot 1.0`")
      .setDescription("--------------------"
      .addField(config.prefix + "ping", "Says the bots ping", true)
    message.channel.send({embed})
  } else

  
  if(message.content === config.prefix + "name") {
    if(message.author.id !== config.ownerID) return;
        let args = message.content.split(" ").slice(1);
        let newname = args.join(" ");
        client.user.setUsername(newname)
        message.channel.send("Changed name to " + newname)
  } else
     
  if(message.content.startsWith(config.prefix + 'prefix')) {
    if (message.author.id !== config.ownerID) return;
      let args = message.content.split(' ').slice(1);
      let prefix = args[0];
      let command = args.shift()
      message.channel.send(`\`\`Prefix now ${prefix}\`\``)
      // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
      let newPrefix = message.content.split(' ').slice(1, 2)[0];
      // change the configuration in memory
      config.prefix = newPrefix;

      // Now we have to save the file.
      fs.writeFile('./config.json', JSON.stringify(config), (err) => {if(err) console.error(err);
 });
} else
   
   if (message.content.startsWith(config.prefix + "game")) {
      if (message.author.id !== config.ownerID) return;
      let args = message.content.split(" ").slice(1);
      let newgame = args.join(" ");
      client.user.setGame(newgame)
      message.channel.send("Set game to " + newgame)
   }
});

client.login(config.token);
