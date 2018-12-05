import { Component, OnInit } from '@angular/core';
import { TimerService } from '../TimerService';

@Component({
  selector: 'affichage',
  templateUrl: './affichage-component.component.html',
  styleUrls: ['./affichage-component.component.css']
})
export class AffichageComponentComponent implements OnInit {

  constructor(private _timer: TimerService) { }

  ngOnInit() {
  }

}
