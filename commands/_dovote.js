/*CMD
  command: /dovote
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

voteIndex = params.split(" ")[0];
cur_answer_index = params.split(" ")[1];

voteParams = Bot.getProperty("voteParams" + voteIndex);

isVotedAlready = voteParams.votedUsers[user.telegramid];

if(!isVotedAlready){
  voteParams.votedUsers[user.telegramid] = cur_answer_index;
  voteParams.results[cur_answer_index]+=1;
  Bot.setProperty("voteParams" + voteIndex, voteParams, "json" );

  buttons = [];
  for(answer_index in voteParams.answers){
   title = voteParams.answers[answer_index] + ": " + voteParams.results[answer_index];
   buttons.push( { title: title, command: "/dovote " + voteIndex + " " +  answer_index } );
   voteParams.results.push(0);
  }

  Bot.editInlineKeyboard(buttons);
}
