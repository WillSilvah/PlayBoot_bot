/*CMD
  command: 5
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
    [ {title: "Voltar", command: "5"},
      {title: "Contato ao desenvolvedor", url: "t.me/willsilvahWGC" } ],
    [ {tittle: "Beta", command: "Beta" } ],
    [ {tittle: "Novidades do PlayBoot", command: "6" } ]
]
Bot.sendInlineKeyboard(buttons, "Última Parte ")
