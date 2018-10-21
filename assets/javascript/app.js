
$("#start").on("click", function () {
    game.start();
})

$(document).on("click", '#stop', function () {
    game.over();
})


//TRIVIA QUESTIONS, ANSWERS, CORRECT ANSWERS=======================================
var triviaQuestions = [{
    question: "What year was Motown founded?",
    answer: [1962, 1959, 1971, 1968],
    correctAnswer: "1959",
}, {
    question: "Who sang I'd Rather go Blind?",
    answer: ["Etta James", "Dianna Ross", "Tammi Terrel", "Mary Wells"],
    correctAnswer: "Etta James",
}, {
    question: "Who sang Tired of Being Alone?",
    answer: ["Sam Cooke", "Al Green", "Marvin Gaye", "Smokey Robinson"],
    correctAnswer: "Al Green",
}, {
    question: "Who sang A Change is Gonna Come?",
    answer: ["Marvin Gaye", "Otis Redding", "Al Green", "Sam Cooke"],
    correctAnswer: "Sam Cooke",
}, {
    question: "Who sang Your Old Stand By?",
    answer: ["Etta James", "Dianna Ross", "Tammi Terrel", "Mary Wells"],
    correctAnswer: "Mary Wells",
}, {
    question: "Who sang Baby Come Close?",
    answer: ["Sam Cooke", "Al Green", "Marvin Gaye", "Smokey Robinson"],
    correctAnswer: "Smokey Robinson",
}, {
    question: "Who sang Distant Lover?",
    answer: ["Sam Cooke", "Al Green", "Marvin Gaye", "Smokey Robinson"],
    correctAnswer: "Marvin Gaye",
}];


//RUNS GAME=========================================================================

//Score keeper
var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,

    //Countdown clock function
    countdownClock: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            game.over();
        }
    },

    //When start button is clicked this function runs----------------------------------
    start: function () {

        //Start button is removed
        $("#start").remove();

        //Timer countdown begins
        timer = setInterval(game.countdownClock, 1000);

        //Countdowns is displayed
        $("#inner-container").html("<h2>Time Remaining: <span id='counter'>60</span> Seconds</h2><br><br>");

        //Replaces start button with trivia questions, radio buttons, and answers
        for (var i = 0; i < triviaQuestions.length; i++) {
            $("#inner-container").append('<h2>' + triviaQuestions[i].question + '</h2>');

            for (var j = 0; j < triviaQuestions[i].answer.length; j++) {
                $("#inner-container").append("<input type='radio' name='question-" + i + "' value ='" + triviaQuestions[i].answer[j] + "'>" + triviaQuestions[i].answer[j]);
            }
        }

        //Adds the done button at bottom of game
        $("#inner-container").append('<br><br><br><button id="stop">Done</button>');
    },

    //Adds total when game is over and adds to final score----------------------------------------


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
        })
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === triviaQuestions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === triviaQuestions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === triviaQuestions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() === triviaQuestions[6].correctAnswer) {
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
