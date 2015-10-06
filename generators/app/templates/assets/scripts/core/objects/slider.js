//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0 - Slider JS
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// Define slider defaults
var evoSliderDefaults = {
	animate: true, // Animated slide on/off
	min: 0, // Min value to show on slider
	max: 100, // Max value to show on slider
	orientation: "horizontal", // Orientation: horizontal (default) or vertical
	step: 1, // Determines the size or amount of each interval or step the slider takes between the min and max
	value: 50 // Start value for the slider handle
};

// Slider function:
// Pass data attribute value of slider object and any slider options you want to add/override
var evoSlider = function(objectDataValue, options) {
	
	// Variable to define slider object based on data attribute value
	var sliderDataValue = jQuery('[data-evo-slider='+objectDataValue+']');

	// Apply slider and any default or custom slider options
	sliderDataValue.slider(jQuery.extend({},evoSliderDefaults,options));
};


// Define slider range defaults
var evoSliderRangeDefaults = {
	animate: true, // Animated slide true/false
	min: 0, // Min value to show on slider
	max: 100, // Max value to show on slider
	orientation: "horizontal", // Orientation: horizontal (default) or vertical
	range: true, // Range slider true/false
	step: 1, // Determines the size or amount of each interval or step the slider takes between the min and max
	values: [10, 80] // Start values for the sliders handles
};

// Slider range function:
// Pass data attribute value of slider range object and any slider range options you want to add/override
var evoSliderRange = function(objectDataValue, options) {
	
	// Variable to define slider range object based on data attribute value
	var sliderDataValue = jQuery('[data-evo-slider='+objectDataValue+']');

	// Apply slider range and any default or custom slider range options
	sliderDataValue.slider(jQuery.extend({},evoSliderRangeDefaults,options));

	// Apply slider range label values to the corresponding slider range input of the slider range object
	sliderDataValue.slider({
		slide: function(event, ui) {
			sliderDataValue.parent().find('.evo-slider-range-input').val(ui.values[0]+"%"+" - "+ui.values[1]+"%");
		}
	});
};

// Define slider range - single handle defaults
var evoSliderRangeSingleHandleDefaults = {
	animate: true, // Animated slide true/false
	min: 0, // Min value to show on slider
	max: 100, // Max value to show on slider
	orientation: "horizontal", // Orientation: horizontal (default) or vertical
	step: 1, // Determines the size or amount of each interval or step the slider takes between the min and max
	value: 10 // Start value for the slider handle
};

// Slider range - single handle function:
// Pass data attribute value of slider range - single handle object and any slider range - single handle options you want to add/override
var evoSliderRangeSingleHandle = function(objectDataValue, options) {
	
	// Variable to define slider range - single handle object based on data attribute value
	var sliderDataValue = jQuery('[data-evo-slider='+objectDataValue+']');

	// Apply slider range - single handle and any default or custom slider range - single handle options
	sliderDataValue.slider(jQuery.extend({},evoSliderRangeSingleHandleDefaults,options));

	// Apply slider range - single handle label values to the corresponding slider range - single handle input of the slider range - single handle object
	sliderDataValue.slider({
		slide: function(event, ui) {
			sliderDataValue.parent().find('.evo-slider-range-input').val(ui.value+"%");
		}
	});
};