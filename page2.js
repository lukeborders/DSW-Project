// JavaScript Document
var firstNameValue = $("#firstname"); // selects the input id firstname
var lastNameValue = $("#lastname"); // selects input of id lastname
var sam = $("#message"); // (friend asked me to name this variable after him) selects input id of message
var emailValue = $("#email"); //selects the input of id email
var max_char = 20; // max amount of characters (20)
var min_char = 1; // min amount of characters (1)
var specialChar = ['!','@','#','$','%','^','&','*','(',')']; // array for the special characters that are NOT allowed for lastname and firstname inputs
var maxEmailValue = 35 - 8; // max amount of characters for email input
var minEmailValue  = 1 + 8; // min amount of characters for email input
var minSam = 1; // min amount of characters for message box
var maxSam = 160; // max amount of characters for message box
var zeroChar = 0;
$(document).ready(function(){
	"use strict";
		$("#send").click(function(){
			$("#firstname").keypress(function(e){ 
				var keyFirst = String.fromCharCode(e.which); // variable to take the input that the user presses in the firstname box, and compare it to special characters
					firstnameInput(); // calls function firstnameInput
						firstnameSpecialCharacterLimit(keyFirst); // calls function firstnameSpecialCharacterLimit with the parameters of keyFirst
							if(firstNameValue.val().length <= max_char && firstNameValue.val().length >= min_char){  // if the first name input length is less than or equal to max_char and is also greater than or equal to the min_char, it loggs to the console, first name is ok.
								console.log("first name is ok");
			}
									else if(firstNameValue.val().length === zeroChar){
										$("#pen").show(); // else if firstNameValue's length is equal to zeroChar, #pen is shown
									}
		});
			$("#lastname").keypress(function(e){
				var keyLast = String.fromCharCode(e.which);
					lastnameInput(); // calls function lastnameInput
						lastnameSpecialCharacterLimit(keyLast);
							if(lastNameValue.val().length <= max_char && lastNameValue.val().length >= min_char){	
								console.log("last name is ok"); // if the lastNameValue length is less than or equal to the max_char, and greater than or equal to the min_char, loggs to the console "last name is ok"
					}
									else if(lastNameValue.val().length === zeroChar){
										$("#peln").show(); // else if lastNameValue's length is equal to zeroChar, shows #peln
									}
			});
				$("#email").keypress(function(){
					emailInputValue(); // calls function emailInputValue
						if(emailValue.val().length <= maxEmailValue && emailValue >= minEmailValue){	
							console.log("email is ok"); // if the emailValue's length is less than or equal to the maxEmailValue, and greater than or equal to  the minEmailValue, "email is ok" is logged to the console
						}
								else if(emailValue.val().length === zeroChar){
									$("#peem").show(); // else if emailValue's length is equal to zeroChar, #peem is shown
								}
				});
					$("#message").keypress(function(){
						samInputValue(); // calls function samInputValue
							if(sam.val().length <= maxSam && sam.val().length >= minSam){
								console.log("text box is ok"); // if the length of sam is less than or equal to maxSam, and greater than or equal to minSam, "text box is ok" is logged to the console
							}
									else if(sam.val().length === zeroChar){
										$("#pem").show(); // else if sam's length is equal to zeroChar, shows #pem
									}
					});
	});
});
function firstnameInput(){
	"use strict";
		if(firstNameValue.val().length > max_char){
			$("#fntl").show();	// if firstNameValue's length is greater than  max_char, id of #fntl is shown
	}
		else if(firstNameValue.val().length < min_char){
			$("#fnts").show(); // else if firstNameValue's length is less than min_char, id of #fnts is shown
		}
}
function lastnameInput(){
	"use strict";
		if(lastNameValue.val().length > max_char){
			$("#lntl").show(); // if lastNameValue's length is greater than max_char, id of #lntl is shown
	}
		else if(lastNameValue.val().length < min_char){
			$("#lnts").show(); // else if the lastNameValue's length is less than min_char, id of #lnts is shown
		}
}
function emailInputValue() {
	"use strict";
		if(emailValue.val().length > maxEmailValue){
			$("#emtl").show(); // if emailValue's length is greater than maxEmailValue, the id of #emts is shown
		}
		else if(emailValue.val().length < minEmailValue){
				$("#emts").show(); // else if the emailValue's length is less than minEmailValue, id of #emts is shown
			}
}
function samInputValue(){
	"use strict";
		if(sam.val().length > maxSam){ 
			$("#mtl").show(); // if sam's length is greater than maxSam,id of #mts is shown
	}
		else if(sam.val().length < minSam) {
			$("#mts").show(); // else if sams length is less than minSam, id of #mts is shown
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
			$("#nsc").show(); // if the specialChar array value of 0 is equal to the key pressed, #nsc is shown
	}
		else if(specialChar[1] === keyLast){
			$("#nsc").show(); // if the specialChar array value of 1 is equal to the key pressed, #nsc is shown
		}
			else if(specialChar[2] === keyLast){
				$("#nsc").show(); // if the specialChar array value of 2 is equal to the key pressed, #nsc is shown
			}
				else if(specialChar[3] === keyLast){
					$("#nsc").show(); // if the specialChar array value of 3 is equal to the key pressed, #nsc is shown
				}
					else if(specialChar[4] === keyLast){
						$("#nsc").show(); // if the specialChar array value of 4 is equal to the key pressed, #nsc is shown
					}
						else if(specialChar[5] === keyLast){
							$("#nsc").show(); // if the specialChar array value of 5 is equal to the key pressed, #nsc is shown
						}
							else if(specialChar[6] === keyLast){
								$("#nsc").show(); // if the specialChar array value of 6 is equal to the key pressed, #nsc is shown
							}
								else if(specialChar[7] === keyLast){
									$("#nsc").show(); // if the specialChar array value of 7 is equal to the key pressed, #nsc is shown
								}
									else if(specialChar[8] === keyLast){
										$("#nsc").show(); // if the specialChar array value of 8 is equal to the key pressed, #nsc is shown
									}
										else if(specialChar[9] === keyLast){
											$("#nsc").show(); // if the specialChar array value of 9 is equal to the key pressed, #nsc is shown
										}

}