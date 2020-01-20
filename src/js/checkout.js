/**
 * Credit.js
 * Version: 1.0.0
 * Author: Ron Masas
 */

(function($) {
  $.fn.extend({
    credit: function(args) {
      $(this).each(function() {
        // Set defaults
        var defaults = {
          auto_select: true
        };

        // Init user arguments
        var args = $.extend(defaults, args);

        // global var for the orginal input
        var credit_org = $(this);

        // Hide input if css was not set
        credit_org.css("display", "none");

        // Create credit control holder
        var credit_control = $("<div></div>", {
          class: "credit-input form-control-lg"
        });

        // Add credit cell inputs to the holder
        for (i = 0; i < 4; i++) {
          credit_control.append(
            $("<input />", {
              class: "credit-cell",
              placeholder: "0000",
              maxlength: 4
            })
          );
        }

        // Print the full credit input
        credit_org.after(credit_control);

        // Global var for credit cells
        var cells = credit_control.children(".credit-cell");

        /**
         * Set key press event for all credit inputs
         * this function will allow only to numbers to be inserted.
         * @access public
         * @return {bool} check if user input is only numbers
         */
        cells.keypress(function(event) {
          // Check if key code is a number
          if (
            event.keyCode > 31 &&
            (event.keyCode < 48 || event.keyCode > 57)
          ) {
            // Key code is a number, the `keydown` event will fire next
            return false;
          }
          // Key code is not a number return false, the `keydown` event will not fire
          return true;
        });

        /**
         * Set key down event for all credit inputs
         * @access public
         * @return {void}
         */
        cells.keydown(function(event) {
          // Check if key is backspace
          var backspace = event.keyCode == 8;
          // Switch credit text length
          switch ($(this).val().length) {
            case 4:
              // If key is backspace do nothing
              if (backspace) {
                return;
              }
              // Select next credit element
              var n = $(this).next(".credit-cell");
              // If found
              if (n.length) {
                // Focus on it
                n.focus();
              }
              break;
            case 0:
              // Check if key down is backspace
              if (!backspace) {
                // Key is not backspace, do nothing.
                return;
              }
              // Select previous credit element
              var n = $(this).prev(".credit-cell");
              // If found
              if (n.length) {
                // Focus on it
                n.focus();
              }
              break;
          }
        });

        // On cells focus
        cells.focus(function() {
          // Add focus class
          credit_control.addClass("c-focus");
        });

        // On focus out
        cells.blur(function() {
          // Remove focus class
          credit_control.removeClass("c-focus");
        });

        /**
         * Update orginal input value to the credit card number
         * @access public
         * @return {void}
         */
        cells.keyup(function() {
          // Init card number var
          var card_number = "";
          // For each of the credit card cells
          cells.each(function() {
            // Add current cell value
            card_number = card_number + $(this).val();
          });
          // Set orginal input value
          credit_org.val(card_number);
        });

        if (args["auto_select"] === true) {
          // Focus on the first credit cell input
          credit_control.children(".credit-cell:first").focus();
        }
      });
    }
  });
})(jQuery);
function getGroups(form) {
  var groups = {
    expireData: "expireMonth expireYear"
  };
  var group = form.find("[data-group]");
  if (group.length) {
    group.each(function(i, item) {
      if (groups[$(item).data("group")] === undefined) {
        groups[$(item).data("group")] = $(item).attr("name");
      } else {
        groups[$(item).data("group")] += " " + $(item).attr("name");
      }
    });
  }

  return groups;
}

$(() => {
  $(".btn-cvv").popover({
    html: true
  });

  var $form = $("#paymentForm");
  var validator = $form.validate({
    errorClass: "invalid-feedback",
    validClass: "valid-feedback",
    ignore: ".ignore",
    errorElement: "span",
    groups: getGroups($form),
    highlight: function(element) {
      $(element).addClass("is-invalid");
    },
    unhighlight: function(element) {
      $(element).removeClass("is-invalid");
    },
    errorPlacement: function(error, element) {
      if (element.data("errorPlacement")) {
        error.insertAfter($(element.data("errorPlacement")));
      } else {
        error.insertAfter(element);
      }
    }
  });
  var ignorePrev = null;
  $("[data-ignore]").on("change", function() {
    var $this = $(this);
    var ignoreArea = $this.data("ignore");

    if (ignoreArea.length > 0) {
      ignorePrev = ignoreArea;
      $(ignoreArea)
        .find("[required]")
        .addClass("ignore")
        .removeClass("is-invalid");
      validator.resetForm();
    } else {
      if (ignorePrev != null) {
        $(ignorePrev)
          .find("[required]")
          .removeClass("ignore");
      }
    }
  });
  $("[data-credit]").credit();
});
