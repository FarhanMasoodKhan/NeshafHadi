(function($) {
    "use strict";

    // Set the date 7 days from now
    var countDownDatePerfume = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    var countDownDateHandbags = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);

    function updateTimer(countDownDate, timerId) {
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById(timerId).innerHTML =
                "<span>" + days + "<span class='timer-cal'>Days</span></span>" +
                "<span>" + hours + "<span class='timer-cal'>Hrs</span></span>" +
                "<span>" + minutes + "<span class='timer-cal'>Min</span></span>" +
                "<span>" + seconds + "<span class='timer-cal'>Sec</span></span>";

            if (distance < 0) {
                clearInterval(x);
                document.getElementById(timerId).innerHTML = "EXPIRED";
            }
        }, 1000);
    }

    // Update timers
    updateTimer(countDownDatePerfume, "demo");
    updateTimer(countDownDateHandbags, "demo2");

})(jQuery);
