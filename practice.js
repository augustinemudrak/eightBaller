var replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "please try again","Ask again later","Better not tell you now","Cannot predict now", "Concentrate and ask again", "Don't count on it", "My sources say no", "Very doubtful"]

var net = require("net");
var port = 2000;

var server = net.createServer(function(connection){
	console.log("someone connected!");
	connection.write("Hi i'm the magically eight ball \n")
	connection.on("data", function(dataInput){
	var questionData = dataInput.toString().trim()
	if(questionData){
	var random = replies[Math.floor(Math.random()*replies.length)]
	connection.write(random);
}
	})
})

server.listen(port, function(){
	console.log("server up and running, and listening on " + port);
})