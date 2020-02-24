$(document).ready(function() {
  $('.contact').submit(function(event) {
      var myName = $('#name').val();
      var myEmail = $('#email').val();
      var comment = $('#message').val();
      if (myName === '' || myEmail === '' || comment === '') {
          alert('Please fill in the required data');
      } else {
          alert(myName + ' ,we have received your message.Thank you for reaching out to us.');
      }
    })
  })
$("#dev").click(function(){
    $(".message1").toggle(1000);
  });
  
  $("#design").click(function(){
    $(".message2").toggle(1000);
  });
  $(document).ready(function() {
    $('#dev').click(function() {
        $('images/design_icon.png').toggle();
    })
  })
  $("#dev").click(function(){
    $(".message1").hide();
  });
  
  $("#dev").click(function(){
    $(".message2").show();
  });
  