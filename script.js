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


const branchData = {

    CSE: {
        subject: "Operating Systems",
        progress: 72,
        recommendation: "Focus on DBMS and Computer Networks today."
    },

    ECE: {
        subject: "Signals and Systems",
        progress: 64,
        recommendation: "Revise Analog Electronics and Communication."
    },

    EEE: {
        subject: "Power Electronics",
        progress: 58,
        recommendation: "Practice Electrical Machines problems."
    },

    ME: {
        subject: "Thermodynamics",
        progress: 81,
        recommendation: "Solve more Fluid Mechanics numericals."
    },

    CE: {
        subject: "Structural Engineering",
        progress: 69,
        recommendation: "Focus on RCC and Environmental Engineering."
    }
};


function updateDashboard(branch) {

    document.getElementById("target-subject").innerHTML =
        branchData[branch].subject;

    document.getElementById("progress").style.width =
        branchData[branch].progress + "%";

    document.getElementById("progress-text").innerHTML =
        branchData[branch].progress + "% Completed";

    document.getElementById("recommendation").innerHTML =
        branchData[branch].recommendation;
}


updateDashboard("CSE");


document.getElementById("branch").addEventListener("change", function () {

    updateDashboard(this.value);

});
function updateClock() {

    const now = new Date();

    const hours = now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();

    const time =
        hours + ":" +
        minutes.toString().padStart(2, '0') + ":" +
        seconds.toString().padStart(2, '0');

    document.getElementById("clock").innerHTML = time;


    let greeting = "";

    if (hours < 12) {
        greeting = "Good Morning";
    }

    else if (hours < 18) {
        greeting = "Good Afternoon";
    }

    else {
        greeting = "Good Evening";
    }

    document.getElementById("greeting").innerHTML =
        greeting;
}


setInterval(updateClock, 1000);

updateClock();