import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-lkg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lkg.component.html',
  styleUrls: ['./lkg.component.scss']
})
export class LkgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
