import { Component } from '@angular/core';
import { Timer } from './timer';
import { State } from './state';
import { TimerService } from './TimerService';
import { StateService } from './StateService';
@Component({
// tslint:disable-next-line:component-selector
selector: 'chronometre',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers: [TimerService, StateService]
})
export class AppComponent {
private _btnPlay = 'Démarrer';
 // private _timer = new Timer();
// private _state = new State();
constructor(private _timer: TimerService, private _state: StateService) {}
play() {
this._timer.start();
this._state.setPlay();
this._btnPlay = 'Continuer';
}
stop() {
this._timer.stop();
this._state.setStop();
}
back() {
this._timer.reset();
this._state.setBack();
this._btnPlay = 'Démarrer';
}
}
