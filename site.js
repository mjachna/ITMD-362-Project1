$.noConflict();

jQuery(function($) {
  $(document).ready(
    function() {
	  //determine if js is present
	  $('html').removeClass('nojs');
      $('html').addClass('hasjs');	
	    //listen for events on signup button
	  $('#form-newsletter').on('keyup focus blur', function() {
	      //get input values
		var name = $('#name').val();
        var email = $('#email').val();
        var emailPattern = $('#email').attr('pattern');
        var deals = $('#deals').val();
        console.log('out');
        if ((name !== ('')) && (email.match(emailPattern))) {
		  console.log('in');
          $('#submit').addClass('active');
        } else {
          $('#submit').removeClass('active');
        }
	}
)})});