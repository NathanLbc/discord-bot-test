const Discord = require("discord.js");
const config = require("./config.json");
const Twitter = require("./twitter.js");

const client = new Discord.Client();
const prefix = "!";

client.on("message", async (message) =>{

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "tt") {
        message.reply("Loading...")
        
        const Response = await Twitter.getRequest();
        message.reply(`Top Tweets : ${Response}.`);
    }

}
);  
client.login(config.BOT_TOKEN);