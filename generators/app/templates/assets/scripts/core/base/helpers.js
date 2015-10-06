//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0 - Global Helper JS Functions
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// FORM
//--------------------------------------------------------------------------------------------------------

	// NUMERIC MASK FOR INPUT - Text input only accepts numbers
	var evoInputNumericMask = function(){
		jQuery('[data-evo-input-numeric-mask]').on('keypress', function(ev) {
			var keyCode = window.event ? ev.keyCode : ev.which;
			//codes for 0-9
			if (keyCode < 48 || keyCode > 57) {
			//codes for backspace, delete, enter
			if (keyCode != 0 && keyCode != 8 && keyCode != 13 && !ev.ctrlKey) {
				ev.preventDefault();
				}
			}
		});
	}

	// Input Numeric Mask Init
	evoInputNumericMask();

	// FORM ELEMENT AUTOFOCUS
	var evoAutofocus = function(){
		if (!("autofocus" in document.createElement("input"))) {
			setTimeout(function(){
				jQuery("[data-evo-autofocus]").focus();
			}, 0);
		}
	}

	// Input Autofocus Init
	evoAutofocus();


// INTERACTIVE
//--------------------------------------------------------------------------------------------------------

	// SELECT ALL CHECKBOXES TOGGLE
	var evoCheckboxesSelectAllToggle = function(){

		// This checks/unchecks all the checkboxes
		jQuery('[data-evo-checkboxes-select-all]').click(function () {
			jQuery('[data-evo-checkboxes-select-all-item]').prop('checked', this.checked);
		});

		// This is used to when user selects a checkbox in list it will uncheck the check all checkbox
		jQuery('[data-evo-checkboxes-select-all-item]').change(function () {
			var check = (jQuery('[data-evo-checkboxes-select-all-item]').filter(":checked").length == jQuery('[data-evo-checkboxes-select-all-item]').length);
			jQuery('[data-evo-checkboxes-select-all]').prop("checked", check);
		});
	}

	// Checkboxes Select All Toggle Init
	evoCheckboxesSelectAllToggle();

	// TOGGLE ELEMENT
	var evoToggleElement = function(){
		jQuery('[data-evo-toggle-element]').click(function(){
			var toggleElementObject = jQuery(this).attr('data-evo-toggle-element');
			jQuery('[data-evo-toggle-element-item="' + toggleElementObject + '"]').toggle();
		});
	}

	// Toggle Element Init
	evoToggleElement();
	