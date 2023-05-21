const telegrambot = require("node-telegram-bot-api");

require("dotenv").config();
const token = process.env.TOKEN;
const bot = new telegrambot(token, {polling: true});
bot.on('message',(message)=>{
   console.log(message);
    const chat_id = message.chat.id;
    if(message.left_chat_participant){
        bot.sendMessage(chat_id,` ${message.left_chat_participant.first_name} has left us 😥😥`)
    }
    if(message.new_chat_participant){
        bot.sendMessage(chat_id,`thank you ${message.new_chat_participant.first_name} for joining us 😉😉`)
    }
  
   if(message.text == "Help"){
    bot.sendMessage(chat_id,`Hii ${message.from.first_name} how can I help you` )
   }
   if(message.text == "suno"){
    bot.sendMessage(chat_id,`haa kiran sunao` )
   }
   if(message.text == "Ky_kar_rhe_ho"){
    bot.sendMessage(chat_id,`aapse bat 😉😉😊😊` )
   }
   if(message.text == "Kaise_ho")
   
    {
        bot.sendMessage(chat_id,`bohot mast aap batao app kaise ho` );
       }
   

})
