(function ($) {
    'use strict';
  $.fn.dollarFormat = function () {
		var $inputField = $(this),
            currentVal = $inputField.val(),
            reg = /[^0-9\.]/;
            
        var processValue = function (field) {
            var dollars = currentVal.slice(0, -2),
                cents = currentVal.slice(-2);
            if (currentVal.length === 1) {
                field.val('00.0' + cents);
            } else if (currentVal.length === 2) {
                field.val('00.' + cents);
            } else {
                field.val(dollars + '.' + cents);
            }
        };

		// process key input
		$inputField.keydown(function (event) {
            var currentKey = String.fromCharCode(event.keyCode);
     
            // if the key pressed wasn't the backspace...
            if (event.keyCode !== 8) {
				if (!currentKey.match(reg)) {
                    currentVal += currentKey;
                    processValue($inputField);
				}

            // if it was the backspace...
            } else {
                currentVal = currentVal.slice(0, -1);
                processValue($inputField);
            }
            event.preventDefault();
        });
	};
})(jQuery);
