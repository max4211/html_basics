/* Wait until document loads */
$(document)
  .ready(function() {
    /* Selector then operate */
    $(".content-box").click(function() {
        $(".content-box").animate({
            width: '500px',
            height: '200px',
            padding: '100px 200px'
        }, "slow");
        $(".content-after").show().animate({opacity: '1'}, 3000);
    });

  });
