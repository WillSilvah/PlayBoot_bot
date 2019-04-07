/*CMD
  command: /start
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
    [ {title: "MC Update", command: "mcpe"},
      {title: "Dar Sugestão", command: "Sugestão" } ],
    [ {title: "grupos", command: "Grupos" } ],
    [ {title: "Seguinte", command: "2" } ]
]
Bot.sendInlineKeyboard(buttons, "Olá! Tudo bem?, Como você já sabe, eu sou o PlayBoot, um novo Bot aqui no Telegram criado pelo @Willsilvahwgc, se quiser dar umas sugestões para ser adicionado, clique no botão [sugestão], versão original: @playboot_bot")
