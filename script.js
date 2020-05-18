$(document).ready(function(){

   

    var magic8Ball = {};
		magic8Ball.listOfAnswers = ["Yes", "No", "Maybe", "Ask again", "Try later", "It's possible", "Unlikely", "Stupid question"];
        
        magic8Ball.askQuestion = function(question) {
            $("#8ball").effect("shake");
            $("#answer").fadeIn(4000);
            $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");	
			
			var randomNumber = Math.random();
			var randomNumberForlistOfAnswers = randomNumber * this.listOfAnswers.length;
			var randomIndex = Math.floor(randomNumberForlistOfAnswers);
            var answer = this.listOfAnswers[randomIndex];

            console.log(question);
            console.log(answer);
            $("#answer").text( answer );
        };
            
    
        var onClick = function() {
            //wait half a second before showing prompt
            setTimeout(
                function() 
                {
                    //show prompt
                    var question = prompt("Ask a yes or no question")
                    magic8Ball.askQuestion(question)
                }, 500);
            magic8Ball.askQuestion(question); 
        };     
        $("#questionButton").click( onClick );
});

	
