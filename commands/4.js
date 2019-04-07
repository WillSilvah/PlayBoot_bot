/*CMD
  command: 4
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var buttons = [
    [ {title: "Voltar", command: "4"},
      {title: "Free Fire", command: "Free Fire" } ],
    [ {title: "BotInfo", command: "Botinfo" } ],
    [ {title: "Seguinte", command: "6" } ]
]
Bot.sendInlineKeyboard(buttons, "Parte 5 OwO")
