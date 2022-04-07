var curDate = new Date();
var endDate = setEndDate(curDate);
setEndDate();

function setEndDate() {
    let dayRemains;
    let curDate = new Date();
    let daysBeforeTU = [4, 5, 6, 0, 1];

    if (daysBeforeTU.indexOf(curDate.getDay()) != -1
        && curDate.getHours() > 12
        || (curDate.getHours() == 12 && curDate.getMinutes() >= 0)) {
        dayRemains = [2, 1, 7, 6, 5, 4, 3]
    }
    else {
        dayRemains = [4, 3, 2, 1, 7, 6, 5]
    }

    let endDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() + dayRemains[curDate.getDay()], 12, 0, 0);
    startTimer(curDate, endDate);
}

function startTimer(curDate, endDate) {
    var clock = $(".clock").FlipClock(Math.abs(endDate - curDate) / 1000, {
        clockFace: "DailyCounter",
        countdown: true,
        callbacks: {
            stop: function () {
                $('#message2').html('Time to play basketball!');
                setEndDate();
            }
        }
    });
}
