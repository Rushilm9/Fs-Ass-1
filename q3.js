var Chatbot = require("./q3_ChatBot_module");
var readline = require("readline");

var r1 = readline.createInterface(process.stdin, process.stdout);
r1.setPrompt("You==>");
r1.prompt();
r1.on("close", () => {});
r1.on("line", function (message) {
  console.log("Bot ==> " + Chatbot.ChatbotReply(message));
  //console.log('Bot ==>  '+ message);

  r1.prompt();
}).on("close", function () {
  //chaining events.
  process.exit(0);
});
