import { ProxyState } from "../AppState.js";
import Clock from "../Models/Clock.js";
// import { ProxyState } from "../AppState.js";

class ClocksService {


    showTime() {
        let time = new Clock();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        am_pm = "AM";

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

        document.getElementById("clock")
            .innerHTML = currentTime;
        document.getElementById('clock').textContent = currentTime;
    }

}
showTime()

export const clocksService = new ClocksService()
