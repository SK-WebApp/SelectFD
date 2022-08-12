



// set up global variable "data" which is the JSON database file 
var data = { "foodtext":
	[
		{
			"IDDSILevel": "0", 
			"Description": "Thin",
			"Modification": "No", 
			"Type": "Drink",
			"Foods": false,
			"Consistency_Texture": "smooth, one texture, no lumps", 
			"TextureNumber": "one",
			"TextureDescription": "smooth",
			"ChewingRequired": "No",
			"BitingRequired": "No",
			"BitingParticleSize": null, 
			"FlowTest": "<1ml",
			"ForkDripTest": "No", 
			"SpoonTiltTest": null, 
			"ForkPressureTest": null,
			"CommonFoodExample": "water"
		},
		{
			"IDDSILevel": "1", 
			"Description": "Slightly Thick",
			"Modification": "Yes", 
			"Type": "Drink",
			"Foods": false,
			"Consistency_Texture": "smooth, one texture, no lumps", 
			"TextureNumber": "one",
			"TextureDescription": "smooth",
			"ChewingRequired": "No",
			"BitingRequired": "No",
			"BitingParticleSize": null, 
			"FlowTest": "1-4ml",
			"ForkDripTest": "No", 
			"SpoonTiltTest": null, 
			"ForkPressureTest": null,
			"CommonFoodExample": "anti-regurgitation infant formulas"
		},
		{
			"IDDSILevel": "2", 
			"Description": "Mildly Thick",
			"Modification": "Yes", 
			"Type": "Drink",
			"Foods": false,
			"Consistency_Texture": "smooth, one texture, no lumps", 
			"TextureNumber": "one",
			"TextureDescription": "smooth",
			"ChewingRequired": "No",
			"BitingRequired": "No",
			"BitingParticleSize": null, 
			"FlowTest": "4-8ml",
			"ForkDripTest": "No", 
			"SpoonTiltTest": null, 
			"ForkPressureTest": null,
			"CommonFoodExample": "thin milkshakes"
		},
		{
			"IDDSILevel": "3", 
			"Description": "Liquidized or Moderately Thick",
			"Modification": "Yes", 
			"Type": "Drink, Food",
			"Foods": true,
			"Consistency_Texture": "smooth, one texture, no lumps", 
			"TextureNumber": "one",
			"TextureDescription": "smooth, no lumps",
			"ChewingRequired": "No",
			"BitingRequired": "No",
			"BitingParticleSize": null, 
			"FlowTest": "8-10ml",
			"ForkDripTest": "Yes", 
			"ForkDripDescription": "drips slowly between the prongs of the fork", 
			"SpoonTiltTest": "pours easily when tilted, not stick to the spoon", 
			"ForkPressureTest": null,
			"CommonFoodExample": "baby's first food like runny rice cereal or pureed fruit"
		},
		{	
			"IDDSILevel": "4", 
			"Description": "Pureed or Extremely Thick",
			"Modification": "Yes", 
			"Type": "Drink, Food",
			"Foods": true,
			"Consistency_Texture": "smooth, one texture, no lumps",
			"TextureNumber": "one",
			"TextureDescription": "smooth, no lumps",
			"ChewingRequired": "No",
			"BitingRequired": "No",
			"BitingParticleSize": null, 
			"FlowTest": ">10ml",
			"ForkDripTest": "Yes", 
			"ForkDripDescription": "doesn't flow or drip continuously through prongs, can sit in a mound above fork", 
			"SpoonTiltTest": "falls off easily when tilted, not stick to the spoon", 
			"ForkPressureTest": "easily makes a clear pattern on the surface with fork with minimum pressure",
			"CommonFoodExample": "thick cereal, pureed meat"
		}, 
		{	
			"IDDSILevel": "5", 
			"Description": "Minced & Moist",
			"Modification": "Yes", 
			"Type": "Food",
			"Foods": true,
			"Consistency_Texture": "soft and moist with no separate thin liquid, small lumps easily squashed", 
			"TextureNumber": "one",
			"TextureDescription": "soft, moist, small squashable lumps",
			"ChewingRequired": "Yes",
			"BitingRequired": "No",
			"BitingParticleSize": "4x4x15mm", 
			"FlowTest": false,
			"ForkDripTest": "Yes", 
			"ForkDripDescription": "doesn�t easily flow or drip easily through prongs, can sit in a mound above the fork", 
			"SpoonTiltTest": "falls off easily when tilted, not stick to the spoon", 
			"ForkPressureTest": "easily separated and come through the tines or prongs of a fork",
			"CommonFoodExample": "finely minced or chopped or mashed meat, fish, fruits or vegetables; drain excess liquid"
		},
		{	
			"IDDSILevel": "6", 
			"Description": "Soft & Bite-Sized",
			"Modification": "Yes", 
			"Type": "Food",
			"Foods": true,
			"Consistency_Texture": "soft tender and moist with no separate thin liquid, one texture", 
			"TextureNumber": "one",
			"TextureDescription": "soft, tender, moist",
			"ChewingRequired": "Yes",
			"BitingRequired": "No",
			"BitingParticleSize": "15x15x15mm", 
			"FlowTest": false,
			"ForkDripTest": "No", 
			"SpoonTiltTest": "falls off easily when tilted, not stick to the spoon", 
			"ForkPressureTest": "light pressure from a fork or spoon held on its side to cut or break foods apart",
			"CommonFoodExample": "cooked, tender and soft meat and fish; steamed or boiled vegetables; drain or thicken excess liquid"
		}, 
		{	
			"IDDSILevel": "7", 
			"Description": "Easy To Chew",
			"Modification": "Yes", 
			"Type": "Food",
			"Foods": true,
			"Consistency_Texture": "soft and tender, dual or mixed textures", 
			"TextureNumber": "mixed",
			"TextureDescription": "soft,tender",
			"ChewingRequired": "Yes",
			"BitingRequired": "Yes",
			"BitingParticleSize": "no restriction", 
			"FlowTest": false,
			"ForkDripTest": "No", 
			"SpoonTiltTest": null, 
			"ForkPressureTest": "light pressure from a fork or spoon held on its side to cut or break foods apart",
			"CommonFoodExample": "tender and soft fish, meat or fruit; steam or boil vegetables; thickened sauce"
		},
		{	
			"IDDSILevel": "7", 
			"Description": "Regular",
			"Modification": "No", 
			"Type": "Food",
			"Foods": true,
			"Consistency_Texture": "no restriction, dual or mixed textures", 
			"TextureNumber": "mixed",
			"TextureDescription": "no restriction",
			"ChewingRequired": "Yes",
			"BitingRequired": "Yes",
			"BitingParticleSize": "no restriction", 
			"FlowTest": false,
			"ForkDripTest": "No", 
			"SpoonTiltTest": null, 
			"ForkPressureTest": null,
			"CommonFoodExample": null
		}
	]
}

// set up global the variable "foodtext"
	var foodtext = data.foodtext; 

// This setsup some additional global variables
	var newValue = []; 	// is the value from each selection choice, gets refreshed 
	console.log(newValue)
	var carriedValue = localStorage.getItem('newValue'); 
	console.log(carriedValue)

	var DFValue = [];  // selected value from Drink/Food selection
	console.log(DFValue)
	var carriedDFValue = localStorage.getItem('DFValue');
	console.log(carriedDFValue)
	
	var DValue = [];  // Designate "drink" as the constant value 
	console.log(DValue)
	var carriedDValue = localStorage.getItem('DValue');
	console.log(carriedDValue)
	
	var FValue = []; // Designate "food" as the constant value 
	console.log(FValue)
	var carriedFValue = localStorage.getItem('FValue');
	console.log(carriedFValue)


// Sets up a global variable "newArray". 
	var newArray = [];

// Gets the newArray and do a JSON parsing to get it in the right format. 	
	var carriedArray = localStorage.getItem('newArray');
//	console.log(carriedArray)
	var newArray_c = JSON.parse(carriedArray); 
//	console.log(newArray_c) 	

// Setup a global variable called "currentLevel" (ie, the current level of selection on html page).
	var currentLevel = []; 

// This function updates the filtered array to the newArray, stores and log the newArray
	function UpdateSet_FArray (filteredArray) {
			newArray = filteredArray; 
			localStorage.setItem('newArray',JSON.stringify(filteredArray));	
			console.log (newArray);
	}


// Sets up Global variables (htmlString1 and carriedString1)
	var htmlString = "";
	var htmlString1 = "__";
	console.log(htmlString1)

	var carriedString1 = localStorage.getItem ('storedString');
	console.log(carriedString1)
	

// This creates global variables storedUI1, 2, 3
	var storedUI1 = [];
	console.log(storedUI1)
	var storedUI2 = [];
	console.log(storedUI2)
	var storedUI3 = [];
	console.log(storedUI3)

// This part sets the carriedUI - for use across html pages
	var carriedUI1 = localStorage.getItem('storedUI1');
	console.log(carriedUI1)
	var carriedUI2 = localStorage.getItem('storedUI2');
	console.log(carriedUI2)
	var carriedUI3 = localStorage.getItem('storedUI3');
	console.log(carriedUI3)



// set up global variables (containers) for render html div\
var UserInputContainer = document.getElementById("userinput");
var IDDSIContainer = document.getElementById("level-info"); 
var ErrorContainer = document.getElementById("error-info"); 
var CommentContainer = document.getElementById("comment"); 
var SelectionContainer = document.getElementById("selection-info"); 




/// _________Functions____________///

/* This function combines several functions which get the dropdown value, output the filtered JS obj-array 
	and keep a log of selection choices. */

	function OutputValueArray() {
	   	GetSelectedTextValue();
    	GetFilteredArray(); 
    	SelectionHistory(newValue);
	}

/* The following two functions grab the value selected in the dropdown box.
It names the value as the current newValue and stores it as the carriedValue */

	function GetSelectedTextValue() {
		let id = document.getElementsByTagName("select")[0].id;
		currentLevel = id; 
		StoreLevelValue (currentLevel);	
	}

	function StoreLevelValue (currentLevel) {
		var levelValue = document.getElementById(currentLevel).value;

		if (levelValue == "Drink") {
			DFValue = levelValue;
			localStorage.setItem('DFValue',levelValue);
			newValue = levelValue;
			localStorage.setItem('newValue',levelValue);
			}
		if (levelValue == "Food") {
			DFValue = levelValue;
			localStorage.setItem('DFValue',levelValue);
			newValue = levelValue;
			localStorage.setItem('newValue',levelValue);
			}	
		else {
			newValue = levelValue;
			localStorage.setItem('newValue',levelValue);
		}					
	}

	
/* This function filteres the array based on selection criteria.*/
 	function GetFilteredArray() { 	
 	
 		let id = document.getElementsByTagName("select")[0].id;
 		currentLevel = id; 

		 if (id == "level1") {
			var level1Value = document.getElementById(currentLevel).value;
			var filteredArray = foodtext.filter(ele => ele.Type.includes(level1Value));
			UpdateSet_FArray (filteredArray);				
			}	
			
		 if (id == "level2a") {
			var level2Value = document.getElementById(currentLevel).value;
			var filteredArray = newArray_c.filter(ele => ele.Modification == level2Value);
			UpdateSet_FArray (filteredArray);		
				
			if (level2Value == "Yes") {
				console.log(newArray)
				clearComment();
				clearError();
				}
			if (level2Value == "No") {		
				if (carriedUI2 == "Do Not Know") {
					renderHTMLerror(currentLevel);
					clearComment();
					}
				if (carriedUI2 != "Do Not Know") {
					renderHTMLcomment(currentLevel, newArray);
					clearError();
					}	
				}	
			}		

		 if (id == "level2b") {
			var level2Value = document.getElementById(currentLevel).value;
			carriedDValue == ""
			var filteredArray = newArray_c.filter(ele => ele.Modification == level2Value);			
			UpdateSet_FArray (filteredArray);			
			
			if (level2Value == "Yes") {			
				clearComment();
				clearError();
				}
			if (level2Value == "No") {
				if (carriedUI3 == "Do Not Know") {
					renderHTMLerror(currentLevel);
					clearComment();
					}
				if (carriedUI3 != "Do Not Know") {
					renderHTMLcomment(currentLevel, newArray);
					clearError();
					}	
				}
			}		
										
		if (id == "level3a") {
			var level3aValue = document.getElementById(currentLevel).value;
			if (level3aValue == "Yes") {
				var filteredArray = newArray_c.filter(ele => ele.TextureNumber.includes("one") && ele.TextureDescription.includes("smooth"));
				UpdateSet_FArray (filteredArray);	
				clearComment();
				clearError();			 
				}	
			if (level3aValue == "No") {	
				var filteredArray = newArray_c.filter(ele => ele.TextureNumber.includes("mixed") );
				UpdateSet_FArray (filteredArray);	
				renderHTMLerror(currentLevel);
				clearComment();
				}
			}			

		if (id == "level3b") {
			var level3bValue = document.getElementById(currentLevel).value;	
			if (level3bValue == "Yes") {
				var filteredArray = newArray_c.filter(ele => ele.ChewingRequired == level3bValue || ele.BitingRequired == level3bValue);		 
				}		
			if (level3bValue == "No") {	
				var filteredArray = newArray_c.filter(ele => ele.ChewingRequired == level3bValue && ele.BitingRequired == level3bValue);
				}	
			UpdateSet_FArray (filteredArray);		
			renderHTMLerror(currentLevel, level3bValue);
			clearComment();	
			}
		
		if (id == "level4a") {
			var level4Value = document.getElementById(currentLevel).value;	
			if (level4Value == "No") {
				var filteredArray = newArray_c.filter(ele => ele.ChewingRequired == level4Value && ele.BitingRequired == level4Value);
				UpdateSet_FArray (filteredArray);	
				clearComment();
				clearError();			 
				}		
			if (level4Value == "Yes") {
				var filteredArray = newArray_c.filter(ele => ele.ChewingRequired == level4Value || ele.BitingRequired == level4Value);
				UpdateSet_FArray (filteredArray);		
				renderHTMLerror(currentLevel);
				clearComment();
				}
			}				

		if (id == "level4b") {
			var level4Value = document.getElementById(currentLevel).value;
			var filteredArray = newArray_c.filter(ele => ele.TextureNumber.includes(level4Value));
			UpdateSet_FArray (filteredArray);				
			if (level4Value == "mixed") {
				if (carriedUI3 == "Do Not Know") {
					renderHTMLerror(currentLevel);
					clearComment();
					}
				if (carriedUI3 != "Do Not Know") {
					renderHTMLcomment(currentLevel, newArray);
					clearError();
					}
				}	
			if (level4Value == "one") {
				if (carriedUI3 == "Do Not Know") {
					renderHTMLerror(currentLevel);
					clearComment();
					}
				if (carriedUI3 != "Do Not Know") {
					renderHTMLcomment(currentLevel, newArray);
					clearError();
					}				
				}	
			}				
			
		 if (id == "level5a") {
			var level5Value = document.getElementById(currentLevel).value;
			var filteredArray = newArray_c.filter(ele => ele.ForkDripTest == level5Value);
			UpdateSet_FArray (filteredArray);		
			clearComment();
			clearError();
			}	
			
		 if (id == "level5b") {
			var level5Value = document.getElementById(currentLevel).value;
			var filteredArray = newArray_c.filter(ele => ele.BitingParticleSize.includes(level5Value));
			UpdateSet_FArray (filteredArray);		
			if (carriedUI3 == "Do Not Know") {
				renderHTMLerror(currentLevel);
				clearComment();
				}
			if (carriedUI3 != "Do Not Know") {
				renderHTMLcomment(currentLevel, newArray);
				clearError();
				}			
			}			
			
		 if (id == "level6a1") {
			var level6a1Value = document.getElementById(currentLevel).value;
			var filteredArray = newArray_c.filter(ele => ele.CommonFoodExample.includes(level6a1Value));
			UpdateSet_FArray (filteredArray);	
			if (carriedUI2 == "Do Not Know")	{
				renderHTMLerror();
				clearComment();
				}
			if (carriedUI2 != "Do Not Know")	{
				renderHTMLcomment(currentLevel, newArray);
				clearError();
				}				
			}	
							
		 if (id == "level6a2") {
			var level6a2Value = document.getElementById(currentLevel).value;
				
			if (level6a2Value == "3" || level6a2Value == "4") {
				var filteredArray = newArray_c.filter(ele => ele.IDDSILevel === level6a2Value);
				UpdateSet_FArray (filteredArray);	
				
				if (carriedDFValue == "Food") {
					if (level6a2Value == "3" && carriedUI3 == "Do Not Know" ) {
						renderHTMLerror();
						clearComment();
						}	
					if (level6a2Value == "3" && carriedUI3 != "Do Not Know") {
						renderHTMLcomment(currentLevel, newArray);
						clearError();
						}				
					if (level6a2Value == "4" && carriedUI3 == "Do Not Know" ) {
						renderHTMLerror();
						clearComment();
						}				
					if (level6a2Value == "4" && carriedUI3 != "Do Not Know") {
						renderHTMLcomment(currentLevel, newArray);
						clearError();
						}					
					}
				
				if (carriedDFValue == "Drink") {
					if (level6a2Value == "3" && carriedUI2 == "Do Not Know" ) {
						renderHTMLerror();
						clearComment(); // added to clear content since renderHTML () used to do it
						}				
					if (level6a2Value == "3" && carriedUI2 != "Do Not Know") {
						renderHTMLcomment(currentLevel, newArray);
						clearError();
						}					
					if (level6a2Value == "4" && carriedUI2 == "Do Not Know" ) {
						renderHTMLerror();
						clearComment();
						}
					if (level6a2Value == "4" && carriedUI2 != "Do Not Know") {
						renderHTMLcomment(currentLevel, newArray);
						clearError();
						}					
					}										
				}
					
			if (level6a2Value == "No") {	
				var filteredArray = newArray_c.filter(ele => ele.Description.includes("Thick") );			
				UpdateSet_FArray (filteredArray);			
 				renderHTMLerror();
 				clearComment();
				}																
			}				
 	}


/* This function displays an alert as to the output of the test. */
	function test() {
		alert(JSON.stringify(test1));
	}


/* This function directs you to the right page depending on the dropdowwn selection. */	
 	function LinkedPage() {
		//This part reset the newValue to the value you actually selected or is currently on the screen.	
		let id = document.getElementsByTagName("select")[0].id; 		
		var newValue = document.getElementById(id).value;
		console.log(newValue)	
		
 		if (newValue == "Drink") {
 			document.location.href = "index_FTApp_2a.html";	
 		}
		if (newValue == "Food") {
			document.location.href = "index_FTApp_2b.html";
		}
		if (newValue == "Yes" && currentLevel == "level2a") {
			document.location.href = "index_FTApp_3a.html";
		}
		if (newValue == "Yes" && currentLevel == "level2b") {
			document.location.href = "index_FTApp_3b.html";
		}			
		if (newValue == "Yes" && currentLevel == "level3a") {
			document.location.href = "index_FTApp_4a.html";
		}
		if (newValue == "Yes" && currentLevel == "level3b") {
			document.location.href = "index_FTApp_4b.html";
		}
		if (newValue == "No" && currentLevel == "level3b") {
			document.location.href = "index_FTApp_6a2.html";
		}
		if (newValue == "No" && currentLevel == "level4a") {
			document.location.href = "index_FTApp_5a.html";
		}	
		if (newValue == "one" && currentLevel == "level4b") {
			document.location.href = "index_FTApp_5b.html";
		}				
		if (newValue == "No" && currentLevel == "level5a") {
			document.location.href = "index_FTApp_6a1.html";
		}		
		if (newValue == "Yes" && currentLevel == "level5a") {
			document.location.href = "index_FTApp_6a2.html";
		}									
		else {
			return;
		}
 	}

	function Go2Start() {
		document.location.href = "index_FTApp_H1.html";	
	}


/* This function display the current filtered array on the html page. Not currently in use. */
	function renderHTML(data) {
		// this part clears the previous html string 
		document.getElementById("level-info").innerHTML = ""; 
		var htmlString = ""; 
		
		for(i = 0; i < data.length; i++) {
			htmlString += '<p>' + "Matching IDDSI Level: " + data[i].IDDSILevel + ', ' + data[i].Description + '.</p>'; 
		}
		IDDSIContainer.insertAdjacentHTML('beforeend', htmlString); 
		
		// this part will clear the Comment and Error Info sections
		document.getElementById("comment").innerHTML = ""; 
		var htmlString = ""; 
		document.getElementById("error-info").innerHTML = ""; 
		var htmlString = ""; 
	}
	
	
/* The following two functions clear the content within the comment and error-info div in html. */
	function clearComment() {
		CommentContainer.innerHTML = "";
//		document.getElementById("comment").innerHTML = ""; 
		var htmlString = "";
	}	

	function clearError() {
		ErrorContainer.innerHTML = "";
//		document.getElementById("error-info").innerHTML = ""; 
		var htmlString = "";
	}


/* The following functions store htmlStrings or keep a log of a user's selection choices in selection-info div.*/
	function SelectionHistory(newValue) {
		SelectionContainer.innerHTML = ""; 
//		document.getElementById("selection-info").innerHTML = ""; 
		var htmlString1 = ""; 
		var htmlString = ""; 
	
		if (currentLevel == "level1") { 
 			htmlString1 += '<p>' + "You consider your item mostly a: " + newValue + '.</p>';	
			StoreString (htmlString1); 
			console.log(carriedString1)
			carriedString1 = "";
			htmlString += carriedString1 + htmlString1;	
			console.log (htmlString)
			console.log(carriedString1)
		}
		
		if (currentLevel == "level2a" || currentLevel == "level2b") { 
			htmlString1 += '<p>' + newValue + " to modification needed" + '.</p>';
 			StoreString (htmlString1); 
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}

		if (currentLevel == "level3a") { 
			htmlString1 += '<p>' + newValue + " to item being one texture, smooth and with no lumps" + '.</p>';	
 			StoreString (htmlString1); 	
 			htmlString += carriedString1 + htmlString1;	
 			StoreString_c (htmlString); 
		}	
		
		if (currentLevel == "level4a" || currentLevel == "level3b") { 
			htmlString1 += '<p>' + newValue + " to requiring chewing and biting" + '.</p>';	
 			StoreString (htmlString1); 	
 			htmlString += carriedString1 + htmlString1;	
 			StoreString_c (htmlString); 	
		}	
			
		if (currentLevel == "level4b" && newValue == "one") { 
			htmlString1 += '<p>' + "It is one consistency (i.e., no separable thin liquids)" + '.</p>';	
 			StoreString (htmlString1); 	
 			htmlString += carriedString1 + htmlString1;	
 			StoreString_c (htmlString); 	
		}	

		if (currentLevel == "level4b" && newValue == "mixed") { 
			htmlString1 += '<p>' + "It has more than one consistency (i.e., mixed with solids and liquids)" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}					
			
		if (currentLevel == "level5a") { 
			htmlString1 += '<p>' + newValue + " to thick enough to be picked up or stay on a fork" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}

		if (currentLevel == "level5b" && newValue == "4x4x15mm") { 
			htmlString1 += '<p>' + "Size: Up to but no more than 4x4x15mm for adults (2x2x8mm for children)" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 	
		}	

		if (currentLevel == "level5b" && newValue == "15x15x15mm") { 
			htmlString1 += '<p>' + "Size: Up to but no more than 15x15x15mm for adults (8x8x8mm for children)" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 	
		}	

		if (currentLevel == "level6a1" && newValue == "formulas") { 
			htmlString1 += '<p>' + " More like anti-regurgitation infant formulas" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}
		
		if (currentLevel == "level6a1" && newValue == "milkshakes") { 
			htmlString1 += '<p>' + " More like thin milkshakes (thicker than infant formulas)" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}
		
		if (currentLevel == "level6a2" && newValue == "3") { 
			htmlString1 += '<p>' + "Drips slowly between the prongs of a fork and pours easily off a spoon when tilted" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}
		
		if (currentLevel == "level6a2" && newValue == "4") { 
			htmlString1 += '<p>' + "Can sit in a mound above a fork and falls off a spoon easily when tilted" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;	
			StoreString_c (htmlString); 
		}	
			
		if (currentLevel == "level6a2" && newValue == "No") { 
			htmlString1 += '<p>' + "Neither drops slowly between the prongs of a fork nor able to sit in a mound above a fork" + '.</p>';	
			StoreString (htmlString1); 	
			htmlString += carriedString1 + htmlString1;
			StoreString_c (htmlString); 
		}		

		SelectionContainer.insertAdjacentHTML('beforeend', htmlString); 

	}

	function StoreString (htmlString1) {
		storedString = htmlString1;
		localStorage.setItem('storedString',htmlString1);
		console.log (storedString)
	}
	
	function StoreString_c (htmlString) {
		storedString = htmlString;
		localStorage.setItem('storedString',htmlString);
		console.log (storedString)
	}
	
	
/* This sets up a function for displaying error messages in the error-info div.*/
	function renderHTMLerror() {

		ErrorContainer.innerHTML = "";
//		document.getElementById("error-info").innerHTML = ""; 
		var htmlString = ""; 

     	if (currentLevel == "level2a" && carriedUI2 =="Do Not Know") { 
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + "</u>. Please double check with your clinician to see whether you are safe to consume items at this level, since you don't know your recommended IDDSI " + carriedDValue + " level (" + carriedUI2 + ")." +'</p>';
  			}	

     	if (currentLevel == "level2b" && carriedUI3 == "Do Not Know") { 
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item (<u>" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + "</u>. Since you do don't know your recommended IDDSI food level (" + carriedUI3 + "), please double check with your clinician to see whether you are safe to consume items at this level." +'</p>';
  			}	
  				
		if (currentLevel == "level3a") {
			htmlString += '<p>' + "Correction Needed - Please modify current item to be one smooth texture and with no lumps before continuing. One easy modification technique is to puree the item." +'</p>';
			}
			
		if (currentLevel == "level3b" && newValue == "No") {
			htmlString += '<p>' + "Reminder - Please make sure current item is one smooth texture and with no lumps before continuing. One easy modification technique is to puree the item." +'</p>';
			}			
	
		if (currentLevel == "level4a") {
			htmlString += '<p>' + "Correction Needed - To be considered a drink, it requires no chewing and biting to be consumed. Please modify current item before continuing (i.e., use a food processor or blender)." +'</p>';
			}
	
		if (currentLevel == "level4b" && newValue == "mixed" && carriedUI3 == "Do Not Know") {
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + "</u>. Since you don't know your recommended IDDSI food level (" + carriedUI3 + "), please double check with your clinician to see whether you are safe to consume items at this level" +'.</p>';
			}
			
		if (currentLevel == "level5b" && carriedUI3 == "Do Not Know" ) {
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + "</u>. Since you don't know your recommended IDDSI food level (" + carriedUI3 + "), please double check with your clinician to see whether you are safe to consume items at this level." +'</p>';
			}	
					
     	if (currentLevel == "level6a1" && carriedUI2 == "Do Not Know") { 
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + "</u>. " + "Since you don't know your recommended IDDSI drink level (" + carriedUI2 + "), please double check with your clinician to see whether it is safe to consume items at this level" + '.</p>'; 
  			}

     	if (currentLevel == "level6a2" && carriedDFValue == "Drink" && carriedUI2 == "Do Not Know") {
			var extractedLevel = newArray[0].IDDSILevel;
			var extractedDes = newArray[0].Description;	 	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + "</u>. " + "Since you don't know your recommended IDDSI drink level (" + carriedUI2 + "), please double check with your clinician to see whether it is safe to consume items at this level" + '.</p>'; 
  			}	
  				
     	if (currentLevel == "level6a2" && carriedDFValue == "Food" && carriedUI3 == "Do Not Know") { 
     		var extractedLevel = newArray[0].IDDSILevel;
     		var extractedDes = newArray[0].Description;	
   			htmlString += '<p>' + "Based on your selection, your item <u>(" + carriedUI1 + ") is at IDDSI level " + extractedLevel + ", " + extractedDes + "</u>. " + "Since you don't know your recommended IDDSI food level (" + carriedUI3 + "), please double check with your clinician to see whether it is safe to consume items at this level" + '.</p>';
  			}	
  											
		if (currentLevel == "level6a2" && newValue == "No") {
			document.getElementById("error-info").innerHTML = ""; // Why is this part necessary? 
			var htmlString = ""; // Why is this part necessary? 
			htmlString += '<p>' + "Correction Needed - Please modify current item so it meets either one of the above selection choices (i.e., adjust thickness level), in order to continue." +'</p>';
			}
					
		ErrorContainer.insertAdjacentHTML('beforeend', htmlString); 
	}


/* This sets up a function for displaying additional comment/instruction in the comment div. */
	function renderHTMLcomment(currentLevel, newArray) {

		var extractedLevel = newArray[0].IDDSILevel;  // This part is from function getLevel
 		console.log(extractedLevel)
 		var extractedDes = newArray[0].Description;	  // This part is from function getDescription
  	    console.log(extractedDes)	
 	    			
		CommentContainer.innerHTML = "";
//		document.getElementById("comment").innerHTML = ""; 
		var htmlString = ""; 	
		
		if (carriedDFValue == "Drink" && carriedUI2 != "Do Not Know") {
			var DlevelNumber = carriedUI2.match(/\d+/);
			console.log(DlevelNumber[0])
		
			if (currentLevel == "level2a" && extractedLevel >= DlevelNumber) {
				htmlString += '<p>' + "Congratulations! You can consume your item." + "Your recommended <span> IDDSI drink level is " + carriedUI2 + "</span>, and your self-selected <u> IDDSI drink level is " + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				}
			if (currentLevel == "level2a" && extractedLevel < DlevelNumber) { 			
				htmlString += '<p>' + "Sorry, your item doesn't match recommendation. " + "Your recommended <span> IDDSI drink level is " + carriedUI2 + "</span>, but your self-selected <u> IDDSI drink level is " + extractedLevel + ", " + extractedDes + "</u>. You can modify your item by making it thicker" + '.</p>';
				}
			if (currentLevel == "level3a") {
				htmlString += '<p>' + "Correction Needed: Please modify current item to be one smooth texture and with no lumps before continuing. One modification technique is to purred the item." +'</p>';
				}
			if (currentLevel == "level4a") {
				htmlString += '<p>' + "Correction Needed: Please modify current item so it requires no chewing and biting to be consumed before continuing." +'</p>';
				}					

			if (currentLevel == "level6a1" && extractedLevel >= DlevelNumber) {
				htmlString += '<p>' + "Congratulations! You can consume your item." + "Your recommended <span> IDDSI drink level is " + carriedUI2 + "</span>, and your self-selected <u> IDDSI drink level is " + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				}
			if (currentLevel == "level6a1" && extractedLevel < DlevelNumber) { 			
				htmlString += '<p>' + "Sorry, your item doesn't match recommendation. " + "Your recommended <span> IDDSI drink level is " + carriedUI2 + "</span>, but your self-selected <u> IDDSI drink level is " + extractedLevel + ", " + extractedDes + "</u>. " + '</p>';
				}

			if (currentLevel == "level6a2" && extractedLevel >= DlevelNumber) {
				htmlString += '<p>' + "Congratulations! You can consume your item. " + "Your recommended <span> IDDSI drink level is " + carriedUI2 + "</span>; and your self-selected <u> IDDSI drink level is " + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				}
				
			if (currentLevel == "level6a2" && extractedLevel < DlevelNumber) { 			
				htmlString += '<p>' + "Sorry, your item doesn't match recommendation. " + "Your recommended <span> IDDSI drink level is " + carriedUI2 + "</span>, but your self-selected <u> IDDSI drink level is " + extractedLevel + ", " + extractedDes + "</u>. " + '</p>';
				}
			}
			
		if (carriedDFValue == "Food" && carriedUI3 != "Do Not Know" ) {
			var FlevelNumber = carriedUI3.match(/\d+/);
			console.log(FlevelNumber[0])
			var FDes = carriedUI3.match(/[^, ]*$/); 
			console.log(FDes[0])
		
			if (currentLevel == "level2b" && extractedLevel < FlevelNumber) {
				htmlString += '<p>' + "Congratulations! You can consume your item." + "Your recommended <span> IDDSI food level is " + carriedUI3 + "</span>, and your self-selected <u> IDDSI food level is " + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				}
			if (currentLevel == "level2b" && extractedLevel == FlevelNumber && extractedDes == FDes)	{
				htmlString += '<p>' + "Congratulations! You can consume your item. " + "Your recommended <span> IDDSI food level is " + carriedUI3 + "</span>, and your self-selected <u> IDDSI food level is " + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';		
				}	
			if (currentLevel == "level2b" && extractedLevel == FlevelNumber && extractedDes != FDes)	{
				htmlString += '<p>' + "Sorry, your item doesn't match recommendation. " + "Your recommended <span> IDDSI food level is " + carriedUI3 + "</span>, but your self-selected <u> IDDSI food level is " + extractedLevel + ", " + extractedDes + "</u>. Please modify your item so it's easier to process" + '.</p>';
				}
			if (currentLevel == "level2b" && extractedLevel > FlevelNumber) { 			
				htmlString += '<p>' + "Sorry, your item doesn't match recommendation. " + "Your recommended <span> IDDSI food level is " + carriedUI3 + "</span>, but your self-selected <u> IDDSI food level is " + extractedLevel + ", " + extractedDes + "</u>. Please modify your item so it's easier to process" + '.</p>';
				}
			if (currentLevel == "level3a") {
				htmlString += '<p>' + "Correction Needed: Please modify current item to be one smooth texture and with no lumps before continuing. One modification technique is to purred the item." +'</p>';
				}
			if (currentLevel == "level4a") {
				htmlString += '<p>' + "Correction Needed: Please modify current item so it requires no chewing and biting to be consumed before continuing." +'</p>';
				}
			if (currentLevel == "level4b" && newValue == "one" ) {
				htmlString += '<p>' + "Reminder: Based on your selection so far, foods at current IDDSI levels (5 and 6) would require chewing but no biting." +'</p>';
				}
			if (currentLevel == "level4b" && newValue == "mixed" && extractedLevel <= FlevelNumber) {
				htmlString += '<p>' + "Congratulations! You can consume your item." + "Your recommended <span> IDDSI food level is " + carriedUI3 + "</span>, and your self-selected <u> IDDSI food level is " + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				}	
			if (currentLevel == "level4b" && newValue == "mixed" && extractedLevel > FlevelNumber) {
				htmlString += '<p>' + "Sorry, your item doesn't match recommendation. " + "Your recommended <span> IDDSI food level is " + carriedUI3 + "</span>, but your self-selected <u> IDDSI food level is " + extractedLevel + ", " + extractedDes + "</u>. " + '.</p>';				
				}	
			if (currentLevel == "level5b" && extractedLevel <= FlevelNumber) {
				htmlString += '<p>' + "Congratulations! You can consume your item. " +  "Your recommended <span> IDDSI food level is " + carriedUI3 + "</span>, and your self-selected <u> IDDSI food level is " + extractedLevel + ", " + extractedDes + "</u>. " + '.</p>' + '<p>' + "Additional reminder: please make sure current item is soft and tender with no separable thin liquid (i.e., one texture). Cut up the item to the correct size." +'</p>';
				}
			if (currentLevel == "level5b" && extractedLevel > FlevelNumber) {
				htmlString += '<p>' + "Sorry, your item doesn't match recommendation. " + "Your recommended <span> IDDSI food level is " + carriedUI3 + "</span>, but your self-selected <u> IDDSI food level is " + extractedLevel + ", " + extractedDes + "</u>. " + '.</p>';				
				}
			if (currentLevel == "level6a2" && extractedLevel <= FlevelNumber) {
				htmlString += '<p>' + "Congratulations! You can consume your item. " + "Your recommended <span> IDDSI food level is " + carriedUI3 + "</span>, and your self-selected <u> IDDSI food level is " + extractedLevel + ", " + extractedDes + "</u>. " + "Examples of " + carriedDFValue + "s" + " at this level: " + newArray[0].CommonFoodExample + '.</p>';
				}
			if (currentLevel == "level6a2" && extractedLevel > FlevelNumber) { 			
				htmlString += '<p>' + "Sorry, your item doesn't match recommendation. " + "Your recommended <span> IDDSI food level is " + carriedUI3 + "</span>, but your self-selected <u> IDDSI food level is " + extractedLevel + ", " + extractedDes + "</u>. " + '.</p>';
				}						
			}
	
		CommentContainer.insertAdjacentHTML('beforeend', htmlString); 
		
		}



	/* Create functions to take the inputs from user on the Home page, store it and pass it to every following page.*/
	// The following 3 functions are for getting the user input from text1, Dlevels and Flevels.	
	function userinput() {
		var storedUI1 = document.getElementById("text1").value;
		console.log(storedUI1)	
	}
	function userinput2() {
		var storedUI2 = document.getElementById("Dlevels").value;
		console.log(storedUI2)	
	}
	function userinput3() {
		var storedUI3 = document.getElementById("Flevels").value;
		console.log(storedUI3)	
	}

	// This function is for storing the userinput value.
	function StoreUInputlValue(UserInputValue) {
		var inputValue1 = document.getElementById("text1").value;
		console.log(inputValue1)
		storedUI1 = inputValue1;
		localStorage.setItem('storedUI1',inputValue1);
		
		var inputValue2 = document.getElementById("Dlevels").value;
		console.log(inputValue2)
		storedUI2 = inputValue2;
		localStorage.setItem('storedUI2',inputValue2);
		
		var inputValue3 = document.getElementById("Flevels").value;
		console.log(inputValue3)
		storedUI3 = inputValue3;
		localStorage.setItem('storedUI3',inputValue3);		
	}


	/* This function takes the carriedUI values and generate a string output to display users' initial inputs.*/
	function RetrieveInputValue() {
		document.getElementById('userinput1').innerHTML = "Your item of interest is: <u>" + carriedUI1 + "</u>.";
		document.getElementById('userinput2').innerHTML = " Your recommended IDDSI Drinks (Liquids) Level is:  <span>" + carriedUI2 + "</span>.";
		document.getElementById('userinput3').innerHTML = " Your recommended IDDSI Foods (Solids) Level is:  <span>" + carriedUI3 + "</span>.";	
	}

	function RetrieveString() {
		document.getElementById('selection-info').innerHTML = carriedString1;
	}

	/*  This function grabbing the current value in the Select box when a page refresh. To be used Onload. 
	Instead of being a separate function, incorporated it into the LinkedPage function.*/
	function RetrieveTempLevelValue () { 	
		let id = document.getElementsByTagName("select")[0].id; 		
		var templevelValue = document.getElementById(id).value;
		console.log(templevelValue)
	}
	
	function StoreDirect () {
		StoreUInputlValue();
// 		RetrieveInputValue();
		document.location.href = "index_FTApp_H1.html";
	}

	/* These two functions get the level and description information from each array. */
	function getLevel(data) {
			var extractedLevel = data[0].IDDSILevel;
			console.log(extractedLevel)
	}

	function getDescription(data) {
			var extractedDes = data[0].Description;
			console.log(extractedDes)
	}


	/* This function grabs the number portion from a string using regex.*/
	function compareIDDSILevel ()  {
		// This parts gets the number portion from carried UI3 which is food level
		 var FlevelNumber = carriedUI3.match(/\d+/);
		 console.log(levelNumber[0])

		// This parts gets the number portion from carried UI2 which is drink level. 
		 var DlevelNumber = carriedUI2.match(/\d+/);
		 console.log(levelNumber[0])
	}
