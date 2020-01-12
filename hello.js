$(document).ready(function () {

    var interval, timeout;

    var front = $('.slides').attr('id') + '_front';
    var back = $('.slides').attr('id') + '_back';

    $('.slides').wrapInner("<div class='images'></div>");

    $('.slides').prepend("<div class='front " + front + "'>&gt;</div><div class='back " + back + "'>&lt;</div>");

    $('.slides').find('img:first').addClass('top');

    var start = function () {
        interval = setInterval(forward, num * 1000);
    }

    var stop = function () {
        clearInterval(interval);
    }

    var forward = function () {
        var curr = $('.slides img.top');
        var next = curr.next();

        if (!next.length) {

            next = $('.slides img:first');
            next.addClass('top');

            curr.animate({
                opacity: 0.0
            }, 1000, function () {
                curr.removeClass('top');
                curr.css({
                    opacity: 1.0
                });
            });

        } else {

            next.css({
                opacity: 0.0
            })
                .addClass('top')
                .animate({
                opacity: 1.0
            }, 1000, function () {
                curr.removeClass('top');
            });
        }
    }

    var backward = function () {
        var curr = $('.slides img.top');
        var next = curr.prev();

        if (!next.length) {

            next = $('.slides img:last');
            next.css({
                opacity: 0.0
            }).addClass('top');
            next.animate({
                opacity: 1.0
            }, 1000, function () {
                curr.removeClass('top');
                curr.css({
                    opacity: 1.0
                });
            });

        }
         else {
            next.addClass('top');
            curr.animate({
                opacity: 0.0
            }, 1000, function () {
                curr.removeClass('top');
                curr.css({
                    opacity: 1.0
                });
            });
        }
    }

    $(document).on('click', '.' + front, function () {
        stop();
        forward();
    });

    $(document).on('click', '.' + back, function () {
        stop();
        backward();
    });
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            console.log('hello');
            start(); 
        }
        else if($(this).prop("checked") == false){
            console.log('stop');
            stop();
        }
        else{
            stop();
        }
    })
let num;
$('#clickMe').on('click', function(){
    num = $('input[type="number"]').val();
});
})
