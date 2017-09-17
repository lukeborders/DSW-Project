// JavaScript Document
var max_char = 20; // max amount of characters (20)
var min_char = 1; // min amount of characters (1)
var specialChar = ['!','@','#','$','%','^','&','*','(',')']; // array for the special characters that are NOT allowed for lastname and firstname inputs
var minSam = 1; // min amount of characters for message box
var maxSam = 160; // max amount of characters for message box
var zeroChar = 0;
var emailValues = ['gmail.com','yahoo.org','icloud.com'];
var alphabetValues = ['a','b','c','d','e','','f','','g','h','i','j','k','','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
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
					}
			});
				$("#email").keypress(function(){
					var maxEmailValuegm = 25 + emailValues[0].length; // max amount of characters for email input
						var maxEmailValueyh = 25 + emailValues[1].length;
							var maxEmailValueic = 25 + emailValues[2].length;
								var minEmailValue  = 1; // min amount of characters for email input
										emailInputValue(); // calls function emailInputValue
											pleaseEnterEM();
												var emailValue = $("#email"); //selects the input of id email
													if(emailValue.val().length <= maxEmailValuegm && emailValue.val().length >= minEmailValue || emailValue.val().length <= 		maxEmailValueyh && emailValue.val().length >= minEmailValue || emailValue.val().length <= maxEmailValueic && emailValue.val().length >= minEmailValue){	// if emailValue's length is less than or equal to maxEmailgm, greater than or equal to minEmailValue, less than or equal to maxEmailValueyh and greater than or equal to minEmailValue, less than or equal to maxEmailValueic and greater than or equal to minEmailValue, the console logs "email is ok", and #emtl is hidden, and #emts is hidden
														console.log("email is ok");
															$("#emtl").hide();
																$("#emts").hide();// if the emailValue's length is less than or equal to the maxEmailValue, and greater than or equal to  the minEmailValue, "email is ok" is logged to the console and #emtl is hidden, and #emtsis hidden
														}
																else if(emailValue.val().length === zeroChar){
																	$("#peem").show(); // else if emailValue's length is equal to zeroChar, #peem is shown
															}
																	else if(emailValue.val().length !== zeroChar){
																		$("#peem").hide(); // else if emailValue's length is not equal to zeroChar, #peem is hidden
																}
				});
					$("#message").keypress(function(){
						pleaseEnterSam();
							samInputValue(); // calls function samInputValue
								var sam = $("#message"); // (friend asked me to name this variable after him) selects input id of message
									if(sam.val().length <= maxSam && sam.val().length >= minSam){
										console.log("text box is ok");
											$("#mtl").hide();
												$("#mts").hide();// if the length of sam is less than or equal to maxSam, and greater than or equal to minSam, "text box is ok" is logged to the console and hides #mts and #mtl
							}
					});
						$("#answer").keypress(function(e){
							answerTrue();
								answerFalse();
									var answerKey = String.fromCharCode(e.which);
										answerLetterCharacterLimit();
											pleaseEnterANS();
												//var answer1 = 101;
													//var answerBox = $("#answer");
														if(alphabetValues !== answerKey){
															console.log("a alphabet letter has not been typed in");
														}
							
							
						});
	
});
// Functions 
function firstnameInput(){
	"use strict";
		var firstNameValue = $("#firstname"); // selects the input id firstname
			if(firstNameValue.val().length > max_char){
				$("#fntl").show();	// if firstNameValue's length is greater than  max_char, id of #fntl is shown
		}
					else if(firstNameValue.val().length < min_char){
						$("#fnts").show(); // else if firstNameValue's length is less than min_char, id of #fnts is shown
					}
}
function lastnameInput(){
	"use strict";
		var lastNameValue = $("#lastname"); // selects input of id lastname
			if(lastNameValue.val().length > max_char){
				$("#lntl").show(); // if lastNameValue's length is greater than max_char, id of #lntl is shown
	}
					else if(lastNameValue.val().length < min_char){
						$("#lnts").show(); // else if the lastNameValue's length is less than min_char, id of #lnts is shown
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
								}
									else if(emailValue.val().length < minEmailValue){
											$("#emts").show(); // else if the emailValue's length is less than minEmailValue, id of #emts is shown
									}	
}
function samInputValue(){
	"use strict";
		var sam = $("#message"); // (friend asked me to name this variable after him) selects input id of message
			if(sam.val().length > maxSam){ 
				$("#mtl").show(); // if sam's length is greater than maxSam,id of #mts is shown
	}
					else if(sam.val().length < minSam) {
						$("#mts").show(); // else if sams length is less than minSam, id of #mts is shown
		}
}
function pleaseEnterFN(){
	"use strict";
	var firstNameValue = $("#firstname");
		if(firstNameValue.val().length === zeroChar){
			$("#pen").show();
		}
			else if(firstNameValue.val().length > zeroChar){
				$("#pen").hide();
			}
}
function pleaseEnterLN(){
	"use strict";
	var lastNameValue = $("#lastname");
		if(lastNameValue.val().length === zeroChar){
			$("#peln").show();
				console.log("please enter last name");
		}
			else if(lastNameValue.val().length > zeroChar){
				$("#peln").hide();
			}
}
function pleaseEnterEM(){
	"use strict";
	var emailValue = $("#email");
		if(emailValue.val().length === zeroChar){
			$("#peem").show();
				console.log("please enter your email");
		}
			else if(emailValue.val().length > zeroChar){
				$("#peem").hide();
					console.log("email is entered");
			}
	
}
function pleaseEnterSam(){
	"use strict";
	var sam = $("#message");
		if(sam.val().length === zeroChar){
			$("#pem").show();
		}
			else if(sam.val().length > zeroChar){
				$("#pem").hide();
			}
		
}
function pleaseEnterANS(){
	"use strict";
		var answerBox = $("#answer");
			if(answerBox.val().length === zeroChar){
				console.log("please enter answer");
			}
}
function answerTrue(){
	"use strict";
	var answer = 100 + 1;
		var answerBox = $("#answer");
				if(answerBox.val() === answer){
			   		console.log("answer is true");
						$("#correct").show();
			   }
}
function answerFalse(e){
	"use strict";
	var answerKey = String.fromCharCode(e.which);
		var answer = 100 + 1;
			var answerBox = $("#answer");
				if(answerBox.val() !== answer || alphabetValues === answerKey){
				   console.log("answer is incorrect");
						$("#incorrect").show();
				   }
}
function firstnameSpecialCharacterLimit(keyFirst){ // funtion with the parameter keyFirst
	"use strict";
		if(specialChar[0] === keyFirst){ 
			$("#nsc").show(); // if the specialChar array value of 0 is equal to the key pressed, #nsc is shown (0 is actually the first char in the array)
	}
				else if(specialChar[1] === keyFirst){
					$("#nsc").show(); // if the specialChar array value of 1 is equal to the key pressed, #nsc is shown
			}
						else if(specialChar[2] === keyFirst){
							$("#nsc").show(); // if the specialChar array value of 2 is equal to the key pressed, #nsc is shown
					}
								else if(specialChar[3] === keyFirst){
									$("#nsc").show(); // if the specialChar array value of 3 is equal to the key pressed, #nsc is shown
							}
										else if(specialChar[4] === keyFirst){
											$("#nsc").show(); // if the specialChar array value of 4 is equal to the key pressed, #nsc is shown
									}
												else if(specialChar[5] === keyFirst){
													$("#nsc").show(); // if the specialChar array value of 5 is equal to the key pressed, #nsc is shown
											}
														else if(specialChar[6] === keyFirst){
															$("#nsc").show(); // if the specialChar array value of 6 is equal to the key pressed, #nsc is shown
													}
															else if(specialChar[7] === keyFirst){
																$("#nsc").show(); // if the specialChar array value of 7 is equal to the key pressed, #nsc is shown
															}
																	else if(specialChar[8] === keyFirst){
																		$("#nsc").show(); // if the specialChar array value of 8 is equal to the key pressed, #nsc is shown
																		}
																			else if(specialChar[9] === keyFirst){
																				$("#nsc").show(); // if the specialChar array value of 9 is equal to the key pressed, #nsc is shown
																				}
}
function lastnameSpecialCharacterLimit(keyLast){ // function with the parameter keyLast
	"use strict";
		if(specialChar[0] === keyLast ){
			$("#nsc2").show(); // if the specialChar array value of 0 is equal to the key pressed, #nsc is shown
			}		
				else if(specialChar[1] === keyLast){
					$("#nsc2").show(); // if the specialChar array value of 1 is equal to the key pressed, #nsc is shown
				}
						else if(specialChar[2] === keyLast){
							$("#nsc2").show(); // if the specialChar array value of 2 is equal to the key pressed, #nsc is shown
						}
								else if(specialChar[3] === keyLast){
									$("#nsc2").show(); // if the specialChar array value of 3 is equal to the key pressed, #nsc is shown
								}
										else if(specialChar[4] === keyLast){
											$("#nsc2").show(); // if the specialChar array value of 4 is equal to the key pressed, #nsc is shown
										}
												else if(specialChar[5] === keyLast){
													$("#nsc2").show(); // if the specialChar array value of 5 is equal to the key pressed, #nsc is shown
												}
														else if(specialChar[6] === keyLast){
															$("#nsc2").show(); // if the specialChar array value of 6 is equal to the key pressed, #nsc is shown
														}
																else if(specialChar[7] === keyLast){
																	$("#nsc2").show(); // if the specialChar array value of 7 is equal to the key pressed, #nsc is shown
																}
																		else if(specialChar[8] === keyLast){
																			$("#nsc2").show(); // if the specialChar array value of 8 is equal to the key pressed, #nsc is shown
																		}
																				else if(specialChar[9] === keyLast){
																					$("#nsc2").show(); // if the specialChar array value of 9 is equal to the key pressed, #nsc is shown
																				}
}
function answerLetterCharacterLimit(answerKey){
	"use strict";
		if(alphabetValues[0] === answerKey){
			
		}
			else if(alphabetValues[1] === answerKey){
				
			}
				else if(alphabetValues[2] === answerKey){
				
			}
					else if(alphabetValues[3] === answerKey){
				
			}
						else if(alphabetValues[4] === answerKey){
				
			}
							else if(alphabetValues[5] === answerKey){
				
			}
								else if(alphabetValues[6] === answerKey){
				
			}
									else if(alphabetValues[7] === answerKey){
				
			}							else if(alphabetValues[8] === answerKey){
				
			}
											else if(alphabetValues[9] === answerKey){
				
			}
												else if(alphabetValues[10] === answerKey){
				
			}
													else if(alphabetValues[11] === answerKey){
				
			}
														else if(alphabetValues[12] === answerKey){
				
			}
															else if(alphabetValues[13] === answerKey){
				
			}
																else if(alphabetValues[14] === answerKey){
				
			}
																	else if(alphabetValues[15] === answerKey){
				
			}
																		else if(alphabetValues[16] === answerKey){
				
			}
																			else if(alphabetValues[17] === answerKey){
				
			}
																				else if(alphabetValues[18] === answerKey){
				
			}
																					else if(alphabetValues[19] === answerKey){
				
			}
																						else if(alphabetValues[20] === answerKey){
				
			}
																							else if(alphabetValues[21] === answerKey){
				
			}
																								else if(alphabetValues[22] === answerKey){
				
			}
																									else if(alphabetValues[23] === answerKey){
				
			}
																										else if(alphabetValues[24] === answerKey){
				
			}
																											else if(alphabetValues[25] === answerKey){
				
			}
																					
}
