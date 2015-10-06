//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0 - Base JS Functions
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// BUTTONS
//--------------------------------------------------------------------------------------------------------

	// DISABLED ANCHOR BUTTONS FOUNDATION FIX
	var evoButtonDisabled = function(){
		jQuery('.disabled').click(function(e){
			return false;
		});
	}

	// Disabled Anchor Buttons Init
	evoButtonDisabled();


// FORMS
//--------------------------------------------------------------------------------------------------------

	// PLACEHOLDER ATTRIBUTE POLYFILL FOR IE9
	var evoFormPlaceholderPolyFill = function(){
		jQuery('input, textarea').placeholder();
	}

	// Placeholder Attribute Polyfill for IE9 Init
	evoFormPlaceholderPolyFill();
	