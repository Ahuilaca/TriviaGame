$("#start").on("click", function () {
    game.strart();
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
    counter: 120,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter<=0) {
            console.log("time is up");
            game.done();
        }
    },
    strart: function () {
        timer = setInterval(game.countdown, 1000);
        $("#inner-container").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#inner-container").append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answer.length; j++) {
                $("#inner-container").append("<input type='radio' name='question-" + i + "'value ='" + questions[i] + "'>" + questions[i].answer[j])
            }

        }
    }
}