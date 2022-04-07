var curDate = new Date();
var d = [1,7,6,5,4,3,2];
var endDate = new Date(today.getFullYear(),today.getMonth(),today.getDate()+ d[today.getDay()], 12, 0, 0);
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
