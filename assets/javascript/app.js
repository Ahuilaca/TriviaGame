
$("#start").on("click", function () {
    game.start();
})

$(document).on("click", '#stop', function () {
    game.over();
})


//Trivia questions, answers, and correct answers==================================
var triviaQuestions = [{
    question: "In what year was the Aztec Empire founded?",
    answer: [1217, 1825, 1519, 1323],
    correctAnswer: "1323"
}, {
    question: "What was the land they came from?",
    answer: ["Mexico", "Atlantis", "Aztlan", "Canada"],
    correctAnswer: "Aztlan"
}, {
    question: "Who was the person that led them on their migration?",
    answer: ["Huitzilopochtli", "Quetzalcoatl", "Xipetotec", "Moctezuma"],
    correctAnswer: "Huitzilopochtli"
}];


//For final score===================================================================
var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,

    //Countdown clock function=======================================================
    countdownClock: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("time is up");
            game.over();
        }
    },

    start: function () {
        timer = setInterval(game.countdownClock, 1000);
        $("#inner-container").html("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2><br><br>");

        //To remove start button======================================================
        $("#start").remove();

        //Loop to replace start button with trivia questions==========================
        for (var i = 0; i < triviaQuestions.length; i++) {
            $("#inner-container").append('<h2>' + triviaQuestions[i].question + '</h2>');

            for (var j = 0; j < triviaQuestions[i].answer.length; j++) {
                $("#inner-container").append("<input type='radio' name='question-" + i + "' value =' " + triviaQuestions[i] + "'>" + triviaQuestions[i].answer[j]);
            }
        }

        //Adds the done button at bottom of game======================================
        $("#inner-container").append('<br><br><br><button id="stop">Done</button>');
    },

    //Adds total when game is over and adds to final score=============================
    over: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === triviaQuestions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === triviaQuestions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === triviaQuestions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.finalScore();
    },

    finalScore: function () {
        clearInterval(timer);
        $("#inner-container h2").remove();

        $("#inner-container").html("<h2>Final Score:</h2><br>");
        $("#inner-container").append("<h2>Correct Answers: " + (this.correct) + "</h2>");
        $("#inner-container").append("<h2>Incorrect Answers: " + (this.incorrect) + "</h2>");
        $("#inner-container").append("<h2>Unanswered: " + (triviaQuestions.length - (this.incorrect + this.correct)) + "</h2>");

    }

}
