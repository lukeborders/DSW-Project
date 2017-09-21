// JavaScript Document
var max_char = 63; // max amount of characters (20)
var min_char = 1; // min amount of characters (1)
var specialChar = ['!','@','#','$','%','^','&','*','(',')']; // array for the special characters that are NOT allowed for lastname and firstname inputs
var minSam = 1; // min amount of characters for message box
var maxSam = 160; // max amount of characters for message box
var zeroChar = 0;
var emailValues = ['gmail.com','yahoo.org','icloud.com'];
var alphabetValues = ['a','b','c','d','e','f','','g','h','i','j','k','','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var profanityFilter = ['fuck','shit','cunt','bitch','pussy','dick'];
var answer = "101";
var isOk = false;
$(document).ready(function(){
	"use strict";
			$("#firstname").keypress(function(e){ 
				var keyFirst = String.fromCharCode(e.which); // variable to take the input that the user presses in the firstname box, and compare it to special characters
				firstnameInput(); // calls function firstnameInput
				firstnameSpecialCharacterLimit(keyFirst); // calls function firstnameSpecialCharacterLimit with the parameters of keyFirst
				pleaseEnterFN();
				var firstNameValue = $("#firstname"); // selects the input id firstname
				if(firstNameValue.val().length <= max_char && firstNameValue.val().length >= min_char){  // if the first name input length is less than or equal to max_char and is also greater than or equal to the min_char, it loggs to the console, first name is ok.
					console.log("first name is ok");
					$("#fntl").hide();
					$("#fnts").hide();
					isOk = true;
				}
					else if(firstNameValue.val() === "" || (firstNameValue.val().length <= max_char &&firstNameValue.val().length >= min_char)){
					   $("#fnts").hide();
						$("#fntl").hide();
						isOk = false;
					   }
		});
			$("#lastname").keypress(function(e){
				var keyLast = String.fromCharCode(e.which);
				lastnameInput(); // calls function lastnameInput
				lastnameSpecialCharacterLimit(keyLast);
				pleaseEnterLN();
				var lastNameValue = $("#lastname"); // selects input of id lastname
				if(lastNameValue.val().length <= max_char && lastNameValue.val().length >= min_char){	
					console.log("last name is ok"); 
					$("#lntl").hide();
					$("#lnts").hide();// if the lastNameValue length is less than or equal to the max_char, and greater than or equal to the min_char, 		loggs to the console "last name is ok"
					isOk = true;
					}
			});
				$("#email").keypress(function(){
					emailInputValue(); // calls function emailInputValue
					pleaseEnterEM();
					var maxEmailValuegm = 25 + emailValues[0].length; // max amount of characters for email input
					var maxEmailValueyh = 25 + emailValues[1].length;
					var maxEmailValueic = 25 + emailValues[2].length;
					var minEmailValue  = 1; // min amount of characters for email input
					var emailValue = $("#email");	//selects the input of id email
						if(emailValue.val().length <= maxEmailValuegm && emailValue.val().length >= minEmailValue || emailValue.val().length <= 		maxEmailValueyh && emailValue.val().length >= minEmailValue || emailValue.val().length <= maxEmailValueic && emailValue.val().length >= minEmailValue){	// if emailValue's length is less than or equal to maxEmailgm, greater than or equal to minEmailValue, less than or equal to maxEmailValueyh and greater than or equal to minEmailValue, less than or equal to maxEmailValueic and greater than or equal to minEmailValue, the console logs "email is ok", and #emtl is hidden, and #emts is hidden
							console.log("email is ok");
							$("#emtl").hide();
							$("#emts").hide();// if the emailValue's length is less than or equal to the maxEmailValue, and greater than or equal to  the minEmailValue, "email is ok" is logged to the console and #emtl is hidden, and #emtsis hidden
							isOk = true;
							}
							else if(emailValue.val().length === zeroChar){
								$("#peem").show(); // else if emailValue's length is equal to zeroChar, #peem is shown
								isOk = false;
								}
								else if(emailValue.val().length !== zeroChar){
									$("#peem").hide(); // else if emailValue's length is not equal to zeroChar, #peem is hidden
									}
				});
					$("#message").keypress(function(e){
						var word = $("#message").val() + String.fromCharCode(e.which);
						profFilter(word);
						pleaseEnterSam();
						samInputValue(); // calls function samInputValue
						var sam = $("#message"); // (friend asked me to name this variable after him) selects input id of message
						if(sam.val().length <= maxSam && sam.val().length >= minSam){
							console.log("text box is ok");
							$("#mtl").hide();
							$("#mts").hide();// if the length of sam is less than or equal to maxSam, and greater than or equal to minSam, "text box is ok" is logged to the console and hides #mts and #mtl
							isOk = true;
						}
					});
						$("#answer").keypress(function(e){
							var i = 0;
							var word = $("#answer").val() + String.fromCharCode(e.which);
							answerBox();
							answerLetterCharacterLimit();
							pleaseEnterANS();
							//var answer1 = 101;
							//var answerBox = $("#answer");
								for(i = 0; i < 26; i++){
									if(alphabetValues[i] === word){
										$("#alphabetVal").show();
										console.log("answer containes letters");
									}
										else if(alphabetValues[i] !== word){
											$("#alphabetVal").hide();
										}
								}
						});
										$("#send").click(function(){
											if(isOk === true){
												window.open("newwindowinput.html");
											}
												else if(isOk === false){
													console.log("please fill out the expected forms");
												}
										});
});
// Functions 
function firstnameInput(){
"use strict";
var firstNameValue = $("#firstname"); // selects the input id firstname
if(firstNameValue.val().length > max_char){
	$("#fntl").show();	// if firstNameValue's length is greater than  max_char, id of #fntl is shown
	isOk = false;
	}
	else if(firstNameValue.val().length < min_char){
		$("#fnts").show(); // else if firstNameValue's length is less than min_char, id of #fnts is shown
		isOk = false;
		}
}
function lastnameInput(){
"use strict";
var lastNameValue = $("#lastname"); // selects input of id lastname
if(lastNameValue.val().length > max_char){
		$("#lntl").show(); // if lastNameValue's length is greater than max_char, id of #lntl is shown
		isOk = false;
		}
		else if(lastNameValue.val().length < min_char){
			$("#lnts").show(); // else if the lastNameValue's length is less than min_char, id of #lnts is shown
			isOk = false;
			}
}
function emailInputValue() {
"use strict";
var maxEmailValuegm = 25 + emailValues[0].length; // max amount of characters for email input
var maxEmailValueyh = 25 + emailValues[1].length;
var maxEmailValueic = 25 + emailValues[2].length;
var minEmailValue  = 1; // min amount of characters for email input
var emailValue = $("#email"); //selects the input of id email
if(emailValue.val().length > maxEmailValuegm || emailValue.val().length > maxEmailValueyh || emailValue.val().length > maxEmailValueic){
	$("#emtl").show(); // if emailValue's length is greater than maxEmailValuegm, greater than maxEmailValueyh, and greater than maxEmailValueic, #emtl is shown
	isOk = false;
	}
	else if(emailValue.val().length < minEmailValue){
		$("#emts").show(); // else if the emailValue's length is less than minEmailValue, id of #emts is shown
		isOk = false;
		}	
}
function samInputValue(){
"use strict";
var sam = $("#message"); // (friend asked me to name this variable after him) selects input id of message
if(sam.val().length > maxSam){ 
	$("#mtl").show(); // if sam's length is greater than maxSam,id of #mts is shown
	isOk = false;
	}
	else if(sam.val().length < minSam) {
		$("#mts").show(); // else if sams length is less than minSam, id of #mts is shown
		isOk = false;
		}
}
function pleaseEnterFN(){
"use strict";
var firstNameValue = $("#firstname");
if(firstNameValue.val().length === zeroChar){
	$("#pen").show();
	isOk = false;
	}
	else if(firstNameValue.val().length > zeroChar){
		$("#pen").hide();
		isOk = true;
		}
}
function pleaseEnterLN(){
"use strict";
var lastNameValue = $("#lastname");
if(lastNameValue.val().length === zeroChar){
	$("#peln").show();
	console.log("please enter last name");
	isOk = false;
	}
	else if(lastNameValue.val().length > zeroChar){
		$("#peln").hide();
		isOk = true;
			}
}
function pleaseEnterEM(){
"use strict";
var emailValue = $("#email");
if(emailValue.val().length === zeroChar){
	$("#peem").show();
	console.log("please enter your email");
	isOk = false;
	}
	else if(emailValue.val().length > zeroChar){
		$("#peem").hide();
		console.log("email is entered");
		isOk = true;
		}
}
function pleaseEnterSam(){
"use strict";
var sam = $("#message");
if(sam.val().length === zeroChar){
	$("#pem").show();
	isOk = false;
}
	else if(sam.val().length > zeroChar){
		$("#pem").hide();
		isOk = true;
			}
}
function pleaseEnterANS(){
"use strict";
var answerBox = $("#answer");
	if(answerBox.val().length === zeroChar){
		console.log("please enter answer");
		isOk = false;
		}
}
function firstnameSpecialCharacterLimit(keyFirst){ // funtion with the parameter keyFirst
"use strict";
var i = 0;
for(i = 0; i < 10;i++){
	 if(specialChar[i] === keyFirst){
		$("#nsc").show(); // if the specialChar array value of 1 is equal to the key pressed, #nsc is shown
		 isOk = false;
	}	
}
}
function lastnameSpecialCharacterLimit(keyLast){ // function with the parameter keyLast
	"use strict";
	var i = 0;
	for(i = 0; i< 10;i++){
		if(specialChar[i] === keyLast){
			$("#nsc2").show();
			isOk = false;
		}
	}
}
function answerLetterCharacterLimit(answerKey){
	"use strict";
	var i = 0;
	for(i = 0; i < 26; i++){
		if(alphabetValues[i] === answerKey){
			console.log("no letters allowed");
			isOk = false;
		}
	}
																					
}
function profFilter(word){
	"use strict";
	var i = 0; 
		for(i = 0; i < 6; i++){
			if(profanityFilter[i] === word){
				$("#noProf").show();
				isOk = false;
			}
		}
}
function answerBox(word){
"use strict";
	if(answer === word){
		$("#correct").show();
		$("#incorrect").hide();
		isOk = true;
	}
		else if(answer !== word){
			$("#correct").hide();
			$("#incorrect").show();
			isOk = false;
		}
}
