/* Wait until document loads */
$(document)
  .ready(function() {
    /* Selector then operate */
    $(".content-box").click(function() {
        $(".content-before").animate({
            width: '500px',
            height: '200px',
            padding: '100px 200px'
        }, "slow").animate({
            fontSize: '32px'
        }, 3000).fadeOut(2000)
        /* $(".content-after").show().animate({opacity: '1'}, 3000); */
    });

  });
