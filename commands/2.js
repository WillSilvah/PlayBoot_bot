/*CMD
  command: 2
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
    [ {title: "Voltar", command: "1"},
      {title: "Meu Perfil", command: "perfil" } ],
    [ {title: "sugestões dos usuários", command: "/userspb" } ],
    [ {title: "Seguinte", command: "3" } ]
]
Bot.sendInlineKeyboard(buttons, "Parte 2 OwO")
