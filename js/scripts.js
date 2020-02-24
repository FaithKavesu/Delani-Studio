$(document).click(function() {
  $(".contact").submit(function(event) {
      var myName = $("#name").val();
      var myEmail = $("#email").val();
      var comment = $("#message").val();
      if (myName === "" || myEmail === "" || comment === "") {
          alert('Please fill in the required data');
      } else {
          alert(myName + ' ,we have received your message.Thank you for reaching out to us.');
      }
    })
  })
$(".design1").click(function(){
    $("#img1").toggle();
    $(".message1").toggle();
  });
  
  $("#dev").click(function(){
    $(".img2").toggle();
    $(".message2").toggle();
  });
  $("product").click(function() {
    $("images/design_icon.png").toggle();
        $("message3").toggle();
  });
  
  