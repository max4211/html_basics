$(document)
  .ready(function() {
    $("#btn1")
      .click(function() {
        $("#test1").text($("#test3").val())
        alert($("#test1")
          .text());
      });

    $("#btn2")
      .click(function() {
        $("#test2").html("<i>My text is now in italics</i>");
        alert($("#test2")
          .html());
      });

    $("#btn3")
      .click(function() {
        alert($("#test3")
          .val());
      });
  });
