/*CMD
  command: sugestão
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: Sugestões dos usuários
  aliases: 
CMD*/

var buttons = [
    [ {title: "Telegram", url: "t.me/willsilvahwgc"},
      {title: "Whatsapp", url: "https://goo.gl/p1BtRD" } ],
    [ {title: "Discord", url: "https://discord.gg/AAU4tnU" } ],
    [ {title: "PlayBoot Suporte", url: "t.me/suportplayboot" } ]
]
Bot.sendInlineKeyboard(buttons, "Que bom que você quer me ajudar no meu desenvolvimento, logo abaixo você verá formas de ter comunicação com o meu desenvolvedor, Telegram, Whatsapp, Discord, Suporte PlayBoot")
