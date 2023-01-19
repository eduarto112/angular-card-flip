import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'ngx-flip',
  templateUrl: './ngx-flip.component.html',
  styleUrls: ['./ngx-flip.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class NgxFlipComponent implements OnInit {
  constructor() {}

  @HostListener('click', ['$event'])
  onClick(e) {
    this.toggleFlip();
  }

  ngOnInit() {}

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }
}
