$(document).ready(function() {
  $(".contact").submit(function(event) {
      var myName = $("#name").val();
      var myEmail = $("#email").val();
      var comment = $("#message").val();
      if (myName === "" || myEmail === "" || comment === "") {
        alert('Please fill in the required data');
    } else {
      alert(myName + "we have received your message.Thank you for reaching out to us.");
      event.preventDefault();
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
    }
  });
$(document).ready(function() {
  $(".design1").click(function(){
    $("#img1").toggle();
    $(".message1").toggle();
  });
})
$(document).ready(function() { 
  $(".dev").toggle();
    $("#img2").toggle();
    $(".message2").toggle();
  });
$(document).ready(function() {
  $("product").toggle();
    $(".img3").toggle();
        $("message3").toggle();
})
})