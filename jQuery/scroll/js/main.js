$(document)
  .ready(function() {
    /* Get URL and ID of page we are on*/
    let page_url = window.location.href;
    let page_id = page_url.substring(page_url.lastIndexOf("#") + 1);

    /* Check what we recieved, then fetch HTML elements */
    if (page_id == "section3" || page_id == "post") {
      $("html, body")
        .animate({
          scrollTop: $("#scroll-" + page_id).offset().top
        }, 1000);
    }

  });
