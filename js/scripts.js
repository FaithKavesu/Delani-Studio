function response() {
      var myName = $("input#name").val();
      var myEmail = $("input#email").val();
      var comment = $("input#message").val();
      alert(myName + ",we have received your message.Thank you for reaching out to us.");
      event.preventDefault();
      $('#name').val('');
      $('#email').val('');
      $('#textarea').val('');
    }
    $(document).ready(function() {  
  $("#img1").click(function(){
    $("#img1").slideToggle();
    $("#message1").toggle();
  });
  $("#message1").click(function(){
    $("#img1").slideToggle();
    $("#message1").toggle();
  });
  $("#img2").click(function() {
    $("#img2").slideToggle();
    $("#message2").toggle();
  });
  $("#message2").click(function() {
    $("#img2").slideToggle();
    $("#message2").toggle();
  })
  $("#img3").click(function() {
    $("#img3").slideToggle();
        $("#message3").slideToggle();
})
  $("#message3").click(function() {
    $("#img3").slideToggle();
      $("#message3").slideToggle();
})
    })
    