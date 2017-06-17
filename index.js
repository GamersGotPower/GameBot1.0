const Discord = require("discord.js");
const config = require("./config.json");
const path = require("path");
const client = new Discord.Client();
const fs = require("fs");

//Ready
client.on('ready', message=> {
   console.log("Up")
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
  }

  if(message.content === config.prefix + "help") {
    const embed = new Discord.RichEmbed();
      embed.setColor(0xcd201f)
      embed.setTitle("GameBot 1.0");
      embed.setAuthor("Help");
      embed.setDescription("--------------------");
      embed.addField(config.prefix + "ping", "Says the bots ping", true);
    message.channel.send({embed});
  }

  if(message.content === config.prefix + "adminhelp") {
      const embed = new Discord.RichEmbed();
        embed.setColor(0xcd201f)
        embed.setTitle("GameBot 1.0");
        embed.setAuthor("Help");
        embed.setDescription("--------------------");
        embed.addField(config.prefix + "gb-name", "Owner only changes username", true);
      message.channel.send({embed});
  }

  if(message.content === config.prefix + "name") {
    if(message.author.id !== config.ownerID) return;
        let args = message.content.split(" ").slice(1);
        let newname = args.join(" ");
        client.user.setUsername(newname)
        message.channel.send("Changed name to " + newname)
  }
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
}
});

client.login(config.token);