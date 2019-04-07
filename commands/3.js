/*CMD
  command: 3
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
    [ {title: "Voltar", command: "2"},
      {title: "Gamer Play - Laboratory", command: "Laboratory" } ],
    [ {title: "PlayBoot Ban's Network", command: "pbn" } ],
    [ {title: "Seguinte", command: "4" } ]
]
Bot.sendInlineKeyboard(buttons, "Parte 3 OwO")
