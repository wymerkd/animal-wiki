$(document).ready(function() {
  $("form#animal-form").submit(function(event) {

    var animal = $("input:radio[name=animal]:checked").val();

    event.preventDefault();

    $('.hide').hide();

    if (animal === "snake") {
      $('#snake').show()
    }

    if (animal === "bird") {
      $('#bird').show()
    }

    if (animal === "monkey") {
      $('#monkey').show()
    }

    if (animal === "whale") {
      $('#whale').show()
    }

  });
});
