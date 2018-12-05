import { Injectable } from '@angular/core';
@Injectable()
export class TimerService {
    get _min(): number { return this.min; }
    get _sec(): number { return this.sec; }
    private min = 0;
    private sec = 0;
    private totalSec = 0;
    private _timer;
    start() {
    this._timer = setInterval(() => {
    this.min = Math.floor(++this.totalSec / 60);
    this.sec = this.totalSec - this.min / 60;
    }, 1000);
    }
    stop() {
    clearInterval(this._timer);
    }
    reset() {
    this.min = this.sec = this.totalSec = 0;
    }
}
