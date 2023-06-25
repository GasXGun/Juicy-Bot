// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, (message) =>{
    if (message.content === '!墨鏡狗'){
        message.channel.send('https://cdn.discordapp.com/attachments/736520651606589470/1122373550330880090/751b53afac5701a83d58ff055d824e1d.png')
    }
});

client.on(Events.MessageDelete, (message) =>{
    console.log(`${message.author.username}刪除了${message.content}`);
    message.channel.send('刪屁刪!');
});

client.on(Events.MessageUpdate, (message) =>{
//    console.log(message);
    console.log(`${message.author.username}將${message.content}改為${message.reactions.message.content}`);
    message.reply('還敢偷改呀!');
});
//EEEE
// Log in to Discord with your client's token
client.login(token);