/*CMD
  command: /vote
  help: Criar novo voto Formato: Perguntas: Resposta 1, Resposta 2, etc ...
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function sendError(value, errMsg){
if((!value)||(value=="")){
Bot.sendMessage(errMsg);
return true;
} 
}

function voteParams(){
if(sendError(params, "Informe as informações para votação :D")){ return }

var arr = params.split(":")
var question = arr[0];
if(sendError(question, "Por favor, insira a pergunta ;-;")){ return }

var answers = arr[1];
if(sendError(answers, "Por favor, insira as respostas! Exemplo: /vote Você me ama?: Sim, não")){ return }

answers = answers.split(",")
return { question: question, answers: answers, results: [], votedUsers:{} }
}

function getVoteIndex(){
totalVotes = Bot.getProperty("totalVotes");
if(!totalVotes){ totalVotes = 0 }

totalVotes = Bot.setProperty("totalVotes", totalVotes + 1, "integer");
return totalVotes;
}

voteParams = voteParams();

if(voteParams){
voteIndex = getVoteIndex();
buttons = [];
results = []
for(answer_index in voteParams.answers){
title = voteParams.answers[answer_index];
buttons.push( { title: title, command: "/dovote " + voteIndex + " " + answer_index } );
voteParams.results.push(0);
}

Bot.setProperty("voteParams" + voteIndex, voteParams, "json" );
Bot.sendInlineKeyboard( buttons, voteParams.question )
}
