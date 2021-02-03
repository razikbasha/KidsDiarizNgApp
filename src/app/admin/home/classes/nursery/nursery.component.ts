import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nursery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nursery.component.html',
  styleUrls: ['./nursery.component.scss']
})
export class NurseryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
