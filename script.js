const examDate = new Date("February 7, 2027 09:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = examDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML =
        days + " Days Left";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML =
            "GATE Exam Started";
    }

}, 1000);