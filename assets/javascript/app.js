// Declare Variables

var time = 20;
var interval = "";
var correct = 0;
var incorrect = 0;
var missed = 0;
var arrayIndex = 0;

var music = document.createElement("audio");
music.setAttribute("src", "spirited-away-ost.mp3");

var q1 = {
	question: "1. What is the name of the movie about a young warrior looking for a cure, a lady and her proud clan of humans, a young girl and her relationships with the animals of the forest?",
	answers: ["Nausicaa of the Valley of the Wind", "The Cat Returns", "Princess Mononoke", "My Neighbor Totoro"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Princess Mononoke",
	image: "./assets/images/princess-mononoke-image.jpg"
};

var q2 = {
	question: "2. What is the name of this animated film about a young girl's own 'mailing company' in a new town, a journey to become a witch, and a chatty cat?",
	answers: ["Kiki's Delivery Service", "Pom Poko", "The Cat Returns", "My Neighbors, The Yamadas"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Kiki's Delivery Service",
	image: "./assets/images/kiki-delivery-service-image.jpeg"
};

var q3 = {
	question: "3. Name this Miyazaki masterpiece about a story of a seaside kingdom and another story a thousand years after a great war. A courageous princess and the 'Ohmu' are the main characters.",
	answers: ["Howl's Moving Castle", "Spirited Away", "Castle In The Sky", "Nausicaa of the Valley of the Wind"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Nausicaa of the Valley of the Wind",
	image: "./assets/images/nausicaa-image.jpg"
};

var q4 = {
	question: "4. What movie is about a story of a mining apprentice, a legendary castle, air pirates, secret agents, and a luminous crystal?",
	answers: ["Princess Mononoke", "Castle In The Sky", "Howl's Moving Castle", "Kiki's Delivery Service"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Castle In The Sky",
	image: "./assets/images/castle-in-the-sky-image.jpg"
};

var q5 = {
	question: "5. This film is based on a long-running comic strip about a middle aged business man and his family. Touching and humorous, what is the name of this film?",
	answers: ["My Neighbors The Yamadas", "Porco Rosso", "Steamboy", "Whisper of the Heart"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "My Neighbors The Yamadas",
	image: "./assets/images/yamadas-image.jpg"
};

var q6 = {
	question: "6. What is the title of an animated film about a story of a new home in the country-side, a forest spirit, and a cat bus?",
	answers: ["My Neighbors the Yamadas", "Whisper of the Heart", "The Cat Returns", "My Neighbor Totoro"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "My Neighbor Totoro",
	image: "./assets/images/my-neighbor-totoro-image.jpg"
};

var q7 = {
	question: "7. Which Miyazaki animated film is about a girl who works in a hat shop, a mysterious wizard, and a moving castle?",
	answers: ["Castle In The Sky", "Howl's Moving Castle", "Kiki's Delivery Service", "The Cat Returns"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Howl's Moving Castle",
	image: "./assets/images/howls-moving-castle-image.jpg"
};

var q8 = {
	question: "8. What is the title of this animated film about a story of nocturnal animals with the power to transform and a clash between the natural world and modern civilization?",
	answers: ["Princess Mononoke", "Spirited Away", "Pom Poko", "Porco Rosso"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Pom Poko",
	image: "./assets/images/pom-poko-image.jpg"
};

var q9 = {
	question: "9. What is the name of the movie that is about a mysterious cat that brings a schoolgirl and a determined boy together by fate, and a character named The Baron?",
	answers: ["Nausicaa of the Valley of the Wind", "My Neighbor Totoro", "Whisper of the Heart", "The Cat Returns"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Whisper of the Heart",
	image: "./assets/images/whisper-of-the-heart-image.jpg"
};

var q10 = {
	question: "10. Which 2001 Studio Ghibli film is the only hand drawn animated film and Japanese animated film that has won the Academy Award for Best Animated Feature?",
	answers: ["Spirited Away", "Princess Mononoke", "Howl's Moving Castle", "Ponyo"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Spirited Away",
	image: "./assets/images/spirited-away-image.jpg"
};


var questionsArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// Functions

	function start () {
		$(".content-div").empty();
		var startButton = $("<button>");
		startButton.text("Start");
		startButton.addClass("start btn btn-default answerBtn");
		$(".content-div").append(startButton);
	};

	function run() {
      interval = setInterval(decrement, 1000);
    };

    function decrement() {
      time--;
      $(".timer-div").html(time);
      if (time == 0) {
        if (arrayIndex < questionsArray.length-1) {
        	setTimeout(function () {questionDisplay(questionsArray[arrayIndex])}, 4000);
        	solutionText(questionsArray[arrayIndex]);
	    	$(".question-div").html("OUT OF TIME");
        	stop();
        	missed++;
      	}
      	else if (arrayIndex < questionsArray.length) {
      		setTimeout(function () {results(questionsArray[arrayIndex])}, 4000);
      		solutionText(questionsArray[arrayIndex]);
	    	$(".question-div").html("OUT OF TIME");
        	stop();
        	missed++;
      	}
      };
    };

    function stop() {
      clearInterval(interval);
    };

	function questionDisplay (object) {
		time = 20;
		$(".timer-div").empty();
		$(".timer-div").html(time);
		$(".question-div").empty();
		$(".content-div").empty();
		run ();
		$(".question-div").html(object.question);
		for (var i = 0; i < object.answers.length; i++) {
			var answerButton = $("<button>");
			answerButton.addClass("answer btn btn-default answerBtn");
			answerButton.text(object.answers[i]);
			answerButton.attr("value", object.values[i]);
			$(".content-div").append(answerButton);
			$(".content-div").append("<br>");
		};
	};

	function solutionText (object) {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".content-div").html("Answer: " + object.correct + "<br>");
		var image = $("<img>");
		image.attr("height", "250");
		image.attr("src", object.image);
		image.addClass("movie-image")
		$(".content-div").append(image);
		arrayIndex++;
	};

	function displayQuiz () {
		questionDisplay(q1);
	};

	function answerChoice () {
		stop();
		if ($(this).attr("value") == "correct") {
			solutionText(questionsArray[arrayIndex]);
			$(".question-div").html("CORRECT");
			correct++;
			if (arrayIndex < questionsArray.length) {
				setTimeout(function () {questionDisplay(questionsArray[arrayIndex])}, 2000);
			}
			else if (arrayIndex < questionsArray.length+1) {
		        setTimeout(function () {results(questionsArray[arrayIndex])}, 2000);
      		}
		}
		else if ($(this).attr("value") == "incorrect") {
			solutionText(questionsArray[arrayIndex]);
			$(".question-div").html("INCORRECT");
			incorrect++;
			if (arrayIndex < questionsArray.length) {
				setTimeout(function () {questionDisplay(questionsArray[arrayIndex])}, 2000);
			}
			else if (arrayIndex < questionsArray.length+1) {
		        setTimeout(function () {results(questionsArray[arrayIndex])}, 2000);
      		}
		}
	};

	function results () {
        $(".timer-div").empty();
		$(".question-div").empty();
		$(".content-div").empty();
		$(".question-div").html("Results");
		$(".content-div").html("<p> Correct: " + correct + "</p>" + "<p> Incorrect: " + incorrect + "</p>" + "<p> Missed: " + missed + "</p>");
		var resetButton = $("<button>");
		resetButton.addClass("reset btn btn-default answerBtn");
		resetButton.text("Try Again?");
		$(".content-div").append(resetButton);
	}

	function gameReset () {
		arrayIndex = 0;
		incorrect = 0;
		correct = 0;
		missed = 0;
		displayQuiz();
	}

	$(document).on("click", ".start", displayQuiz);
	$(document).on("click", ".answer", answerChoice);
	$(document).on("click", ".reset", gameReset);

// Running Code
start();