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
        progress: 72
    },

    ECE: {
        subject: "Signals and Systems",
        progress: 64
    },

    EEE: {
        subject: "Power Electronics",
        progress: 58
    },

    ME: {
        subject: "Thermodynamics",
        progress: 81
    },

    CE: {
        subject: "Structural Engineering",
        progress: 69
    }
};


function updateDashboard(branch) {

    document.getElementById("target-subject").innerHTML =
        branchData[branch].subject;

    document.getElementById("progress").style.width =
        branchData[branch].progress + "%";

    document.getElementById("progress-text").innerHTML =
        branchData[branch].progress + "% Completed";
}


updateDashboard("CSE");


document.getElementById("branch").addEventListener("change", function () {

    updateDashboard(this.value);

});