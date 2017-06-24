"use strict"
$(document).ready(function(){

	// how does the game work?
	// -----------------------
	// 01) click start, question is asked & timer is set
	// 02) user has a timed chance to answer the question
	// 		- if timer reaches zero, +loss
	//		- if answer is wrong, +loss
	//		- if answer is right, +wins
	// 03) game needs an end
	//		- if losses = 05, message
	//		- if wins = 10, message
	// 04) game resets on click

	// random questions selected from these APIs: 101 Questions
	// --------------------------------------------------------
	// create an object similar to the one from Hangman-Game:
	
	var allCategories = {

		science: "https://opentdb.com/api.php?amount=30&category=17&type=multiple", //	30 science questions
		sport:   "https://opentdb.com/api.php?amount=25&category=21&type=multiple", //	25 sports questions
		games:   "https://opentdb.com/api.php?amount=20&category=15&type=multiple", //	20 video games questions
		film:    "https://opentdb.com/api.php?amount=15&category=11&type=multiple", //	15 film questions
		math:    "https://opentdb.com/api.php?amount=11&category=19&type=multiple" //	11 math questions
	}

	//demo call to practice drilling down into the object
	$.ajax({

		// url: "https://opentdb.com/api.php?amount=30&category=17&type=multiple",
		url: allCategories.film,
		method: "GET"

	}).done(function(response){
		console.log(response);
		console.log(response.results);

		//set a variable to the number of results
		var all = response.results.length
		console.log(all);

		//randomly select one of the results: 0 - (all -1)
		console.log(response.results[Math.floor(Math.random() * all)]);

	});
	//this ^^^ will return random questions from the static url


	// 01) click start, question is asked & timer is set
	// -------------------------------------------------
	// lets create a function that gets called three times:
	//		- on start of a new game
	//		- when an answer is right
	//		- when an answer is wrong

	function NextQ(){
		// selects random question
		$.ajax({

			// call a function that returns one random URL string: WhatQ;
			url:
			method: "GET"
		})

		// updates the page "theme"
		// updates the question
		// updates the answer queue
		// calls function to reset timer

	}






});