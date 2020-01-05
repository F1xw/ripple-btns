$("html").on("click", ".rpl-btn", function(event) {
    var btn = $(event.currentTarget);
    var x = event.pageX - btn.offset().left;
    var y = event.pageY - btn.offset().top;
    
    $("<span/>").appendTo(btn).css({left: x, top: y});
    setTimeout(function () {
        $(btn).find(':first-child').remove();
    }, 1000);
});