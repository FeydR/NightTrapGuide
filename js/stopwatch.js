// Reusable stopwatch logic


class Stopwatch {   

    constructor(cb) {
        this.isOn = false;
        this.time = 0;
        this.interval = null;
        this.offset = null;
        this.cb = cb;
    }    

    start() {
        if (!this.isOn) {
            this.interval = setInterval(this.update.bind(this), 10);
            this.offset = performance.now();
            this.isOn = true;             
        }
    }

    delta() {
        let now = performance.now();
        let timePassed = now - this.offset;
        this.offset = now;
        return timePassed;
    }

    stop() {
        if (this.isOn) {
            clearInterval(this.interval);
            this.interval = null;
            this.isOn = false;
        }
    }

    reset() {
        if (!this.isOn) {
            this.time = 0;
            this.update();
        }        
    }  
    

    update() {
        const d = this.delta();        
        this.time += d;
        let formattedTime = this.timeFormatter(this.time);                
        this.cb(formattedTime);
    }    

    timeFormatter(timeInMilliSeconds) {
        let time = new Date(timeInMilliSeconds);
        let minutes = time.getMinutes().toString();
        let seconds = time.getSeconds().toString();
        let ms = time.getMilliseconds().toString();

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        return `${minutes}:${seconds}`;
    }
}
