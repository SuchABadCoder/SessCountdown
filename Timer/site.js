var curDate = new Date();
var endDate = new Date('12/25/2021');
var clock = $(".clock").FlipClock(Math.abs(endDate - curDate) / 1000, {
    clockFace: "DailyCounter",
    countdown: true,
    callbacks: {
        stop:function() {
          $('#message1').html('Merry Christmas!');
          $('#message2').html('Time to smoke sess!');
        }
    }
});
