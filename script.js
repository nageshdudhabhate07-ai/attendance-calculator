let button = document.getElementById("button");

button.addEventListener("click", function(event) {
    //  if (event.key === "Enter") {

        let attendance = +document.getElementById("attendance").value; // Required %
        let present = +document.getElementById("Present-input").value; // Y
        let total = +document.getElementById("Total-input").value;     // X
        let result = document.getElementById("result");
        
        if (total === 0) {
            result.innerText = "Total lectures cannot be 0!";
            result.style.color = "red";
            return;
        }

        if (present > total) {
            result.innerText = "Present lectures cannot be more than total lectures!";
            result.style.color = "red";
            return;
        }

        let total_attendance = (present / total) * 100;
        let n = 0;

        if (total_attendance < attendance) {
            // Need to attend more lectures
            n = (attendance * total - 100 * present) / (100 - attendance);
            result.innerText = `Your attendance is ${total_attendance.toFixed(2)}%. You need to attend ${Math.ceil(n)} more lectures continuously.`;
        } 
        else if (total_attendance > attendance) {
            // Can skip lectures
            n = (100 * present - attendance * total) / attendance;
            result.innerText = `Your attendance is ${total_attendance.toFixed(2)}%. You can skip ${Math.floor(n)} lectures.`;
        } 
        else {
            result.innerText = `Your attendance is exactly ${attendance}%. Maintain it carefully.`;
        }

        result.style.color = "black";
    // }
});
