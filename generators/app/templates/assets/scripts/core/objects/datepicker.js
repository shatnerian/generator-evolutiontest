//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0 - Datepicker JS
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// Define datepicker defaults
var evoDatepickerDefaults = {
	autoSize: true, // auto-size the date input field for date format choosen
	buttonText: "Choose Date", // Title text of the button image
	changeMonth: true, // Month dropdown on/off in datepicker header
	changeYear: true, // Year dropdown on/off in datepicker header
	closeText: "Close", // Set text of close button in button panel
	currentText: "Today", // Set text of choosing today button in button panel
	dateFormat: "m/d/yy", // date format: m/d/yyyy - 1/1/2013, not including preceding zeros for single date values
	minDate: 0, // Dates in the past are disabled and navigation to past calendars is disabled, set to 'null' to allow for dates in the past
	maxDate: null, // Dates in the future are disabled and navigation to the future is disabled, default is null, refer to jQuery UI Datepicker API documentation for disabing dates in the future (http://api.jqueryui.com/datepicker/#option-maxDate)
	numberOfMonths: 1, // Show # of months in datepicker
	showButtonPanel: false, // Show button panel at bottom of datepicker, default is false
	showOn: "both", // when the datepicker should appear, a value of 'both' means when the input field receives focus or calendar icon is clicked
	beforeShow: function(input, inst) {
		
		// If datepicker input has masked option enabled, change date format to mm/dd/yy.
		var datepickerMaskedInput = jQuery(this).is("[data-evo-datepicker-masked]"); // set variable to check if datepicker input has data attribute for masked input option
		if (datepickerMaskedInput) {
			jQuery(this).datepicker("option", "dateFormat", "mm/dd/yy").mask("99/99/9999",{placeholder:"_"}); // If masked input option class then mask input for specified format of mm/dd/yyyy in datepicker call
		};
		
		// If datepicker calendar has message option enabled, append to calendar. Gets label from "data-evo-datepicker-message" attribute on datepicker input in HTML
		var datepickerMessageLabel = jQuery(this).attr("data-evo-datepicker-message");
		var appendDatepickerMessage = function () {
			jQuery("<div class='evo-datepicker-message'><label>" + datepickerMessageLabel + "</label></div>").appendTo(".ui-datepicker");
		};
		if (datepickerMessageLabel) {
			setTimeout(appendDatepickerMessage, 10); // If a datepicker message is available, show the datepicker message after generating datepicker
		};
	},
	onChangeMonthYear: function () {
		
		// If datepicker calendar has message option enabled, append to calendar. Gets label from "data-evo-datepicker-message" attribute on datepicker input in HTML
		var datepickerMessageLabel = jQuery(this).attr("data-evo-datepicker-message");
		var appendDatepickerMessage = function () {
			jQuery("<div class='evo-datepicker-message'><label>" + datepickerMessageLabel + "</label></div>").appendTo(".ui-datepicker");
		};
		if (datepickerMessageLabel) {
			setTimeout(appendDatepickerMessage, 10); // If a datepicker message is available, Show the datepicker message after generating datepicker on month/year change
		};
	}
};

// Datepicker function:
// Pass data attribute value of datepicker object and any datepicker options you want to add/override
var evoDatepicker = function(objectDataValue, options) {
	
	// Variable to define datepicker object based on data attribute value
	var datepickerDataValue = jQuery('[data-evo-datepicker='+objectDataValue+']');

	// Apply datepicker and any default or custom datepicker options
	datepickerDataValue.datepicker(jQuery.extend({},evoDatepickerDefaults,options));
};