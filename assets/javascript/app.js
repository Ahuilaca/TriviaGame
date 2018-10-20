
$("#start").on("click", function () {
    game.start();
})

$(document).on("click", '#end', function () {
    game.done();
})

var questions = [{
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

var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("time is up");
            game.done();
        }
    },
    
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#inner-container").prepend('Time Remaining: <span id="counter">120</span> Seconds');
        $("#start").remove();
        for (var i=0; i<questions.length; i++) {
            $("#inner-container").append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answer.length; j++) {
                $("#inner-container").append("<input type='radio' name='question-"+i+"' value =' "+questions[i]+"'>" +questions[i].answer[j]);
            }
        }
        $("#inner-container").append('<br><button id="end">Done</button>');
    },
    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function() {
        clearInterval(timer);
        $("#inner-container h2").remove();

        $("#inner-container").html("<h2>All done!</h2>");
        $("#inner-container").append("<h3>Correct Answers: "+this.correct+"</h3>");
        $("#inner-container").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $("#inner-container").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }

}