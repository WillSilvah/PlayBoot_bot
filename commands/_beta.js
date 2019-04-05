/*CMD
  command: /beta
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [ {title: "PlayBoot (Beta)", url: "t.me/playbootplus_bot" } ]
]
Bot.sendInlineKeyboard(buttons, "que tal experimentar a versão beta de mim? clique no botão abaixo")
