import { ProxyState } from "../AppState.js";

class ClocksService {


    showTime() {
        setInterval(function () { document.getElementById("clock").innerHTML = getTime() }, 1000)


        function getTime() {

            let date = new Date()
            let hour = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();
            let am_pm = "AM";

            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }

            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;

            let currentTime = hour + ":"
                + min + ":" + sec + am_pm;

            return currentTime
        }

    }
}

export const clocksService = new ClocksService()
