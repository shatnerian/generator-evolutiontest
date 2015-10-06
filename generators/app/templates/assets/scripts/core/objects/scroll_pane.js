//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0 - Scroll Pane JS
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// SCROLL PANE

// Depends on Malihu Jquery Custom Scrollbar Plugin
// https://github.com/malihu/malihu-custom-scrollbar-plugin

// Configuration Options, Methods, and Callbacks
// For explanation of configuration options, methods, and callbacks please visit: http://manos.malihu.gr/jquery-custom-content-scroller/


// Scroll pane defaults
var evoScrollPaneDefaults = {
	setWidth: false,
	setHeight: false,
	setTop: 0,
	setLeft: 0,
	axis: "y",
	scrollbarPosition: "inside",
	scrollInertia: 950,
	autoDraggerLength: true,
	autoHideScrollbar: true,
	autoExpandScrollbar: true,
	alwaysShowScrollbar: 0,
	snapAmount: null,
	snapOffset: 0,
	mouseWheel:{
		enable: true,
		scrollAmount: "auto",
		axis: "y",
		preventDefault: false,
		deltaFactor: "auto",
		normalizeDelta: false,
		invert: false
	},
	scrollButtons:{
		enable: false,
		scrollType: "stepless",
		scrollAmount: "auto"
	},
	keyboard:{
		enable: true,
		scrollType: "stepless",
		scrollAmount: "auto"
	},
	contentTouchScroll: 25,
	advanced:{
		autoExpandHorizontalScroll: false,
		autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
		updateOnContentResize: true,
		updateOnSelectorLength: true
	},
	theme:"dark",
	callbacks:{
		onScrollStart: false,
		onScroll: false,
		onTotalScroll: false,
		onTotalScrollBack: false,
		whileScrolling: false,
		onTotalScrollOffset: 0,
		onTotalScrollBackOffset: 0,
		alwaysTriggerOffsets: true
	},
	live: true
};

// Scroll pane function:
// Pass data attribute value of scroll pane object and any scroll pane options you want to add/override
var evoScrollPane = function(objectDataValue, options) {
	
	// Variable to define scroll pane object based on data attribute value
	var scrollPaneDataValue = jQuery('[data-evo-scroll-pane='+objectDataValue+']');
	
	// Apply scroll pane and any default or custom scroll pane options
	scrollPaneDataValue.mCustomScrollbar(jQuery.extend({},evoScrollPaneDefaults,options));

};